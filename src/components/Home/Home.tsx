'use client'

import React, { useEffect, useState, useCallback } from "react";
import {Carousel, Flex, Heading, Text, SparkleFx, RevealFx, Button, Dialog} from "@/once-ui/components";
import { Footer, Header } from "@/components";
import MasonryGrid from "@/components/Home/MasonryGrid";
import Image from "next/image";


interface TimePassed {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Home() {
    const [timeElapsed, setTimeElapsed] = useState<TimePassed>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const startDate = new Date('2024-10-22T00:00:00');

    const calculateTimeElapsed = useCallback(() => {
        const now = new Date();
        const difference = now.getTime() - startDate.getTime();

        setTimeElapsed({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        });
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const formatTimeElapsed = (time: TimePassed): string => {
        return `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`;
    };

    useEffect(() => {
        calculateTimeElapsed();
        const interval = setInterval(calculateTimeElapsed, 1000);
        return () => clearInterval(interval);
    }, [calculateTimeElapsed]);

    return (
        <Flex
            maxWidth="m"
            fillWidth
            direction="column"
            alignItems="center"
            gap="m"
        >
            <Header />
            <SparkleFx
                speed="medium"
                count={50}
                trigger
            >
                <RevealFx
                    speed="medium"
                    delay={0}
                    translateY={0}
                >

                    <Text variant="heading-strong-m">
                        Today is the perfect day to remind you of all the ways you’re loved. Let’s celebrate YOUR 20 🐶
                    </Text>
                </RevealFx>
            </SparkleFx>
            <Carousel
                aspectRatio="16 / 9"
                indicator="line"
                images={[
                    {
                        alt: 'Sample image 1',
                        src:"/images/5.jpeg"
                    },
                    {
                        alt: 'Sample image 2',
                        src:"/images/2.jpeg"
                    },
                    {
                        alt: 'Sample image 3',
                        src: "/images/3.jpeg"
                    }
                ]}
            />
            <Text className="underline">Do you know that we've been together for: </Text>
            <Heading
                marginY="s"
                variant="display-default-m"
            >
                {formatTimeElapsed(timeElapsed)}
            </Heading>
            <section className="pics-section">
                <Image className="coffee" src="/images/mei7.png" objectFit="cover" height={200} width={140} alt="image" />
                <Image className="milani" src="/images/mei6.png" height={300} width={260} alt="image" />
                <Image className="mela-pup" src="/images/mei1.png" height={200} width={160} alt="image" />
            </section>
            <Flex justifyContent="center" wrap={true} gap="l">
                <div className="note">
                    Happy Birthday to the one who makes my world brighter every day! 🎂✨
                </div>
                <div className="note">
                    Warning: You’re dangerously close to killing me 🚨
                </div>
                <div className="note">
                    Life is so much brighter with you in it 🫠
                </div>
                <div className="note">
                    Wishing you a day as sweet and wonderful as you are! 💖🎉
                </div>
                <div className="note">
                    You have the biggest, kindest heart. You care so deeply for others, and it’s one of the many reasons I love you 💖
                </div>
                <div className="note">
                    You have the cutest laugh! It makes my day 🫠
                </div>
            </Flex>
            <Heading variant="display-strong-m">
                A Gallery of a pretty puppy
            </Heading>
            <MasonryGrid></MasonryGrid>
            <Heading
                className="text-center"
                marginTop="m"
                marginBottom="m"
                variant="display-strong-m"
            >
                Wishing you the happiest birthday ever
            </Heading>
            <Flex>
                <Button
                    variant="primary"
                    size="m"
                    onClick={() => {
                        setIsOpen(true)
                    }}
                    label="Open your gift 💖️"
                />
                <Dialog
                    onClose={() => {
                        setIsOpen(false);
                    }}
                    isOpen={isOpen}
                    title="Look a cute puppy 🐶"
                    secondaryButtonProps={{
                        disabled: false,
                        label: 'Cancel',
                        loading: false,
                        onClick: () => {
                            setIsOpen(false);
                        },
                        size: 'm',
                        variant: 'secondary'
                    }}
                >
                    <Image src="/images/gift.jpeg" className="gift" width={300} height={300} alt="gift" />
                </Dialog>
            </Flex>
            <Footer />
        </Flex>
    );
}