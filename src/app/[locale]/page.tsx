'use client'

import React, { useRef, useState } from 'react';
import { Flex, LetterFx, Input, Button } from '@/once-ui/components';
import Image from "next/image";
import Home from "@/components/Home/Home";

const charset: string[] = ['X', '@', '$', 'a', 'H', 'z', 'o', '0', 'y', '#', '?', '*', '0', '1', '+'];

export default function AuthPage() {
	const [value, setValue] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const login = async (e: React.FormEvent) => {
		e.preventDefault();

		if (["milani", "milany"].includes(value.toLowerCase())) {
			try {
				if (audioRef.current) {
					audioRef.current.volume = .4;
					await audioRef.current.play();
					await new Promise(resolve => setTimeout(resolve, 300));
				}
				setIsLoggedIn(true);
			} catch (error) {
				console.error('Audio playback error:', error);
				setIsLoggedIn(true);
			}
		} else {
			setErrorMessage('Whoops! I know you\'ll figure it out. You always do.');
		}
	};

	return (
		<>
			<audio
				ref={audioRef}
				src="/audio/Sunroof.mp3"
				loop
				preload="auto"
			/>

			{isLoggedIn ? (
				<Home />
			) : (
				<Flex
					maxWidth="m"
					fillWidth
					gap="s"
					direction="column"
					alignItems="center"
					padding="0"
					justifyContent="center"
				>
					<Image
						src="/images/welcome.svg"
						alt="Welcome"
						width={80}
						height={100}
					/>
					<LetterFx
						speed="slow"
						trigger="instant"
						charset={charset}
					>
						For security reasons, I'd like to confirm your identity. Please Enter your name.
					</LetterFx>
					<form className="form" onSubmit={login}>
						<Input
							id="name"
							label="Name"
							autoComplete="off"
							value={value}
							onChange={(e) => {
								setErrorMessage('');
								setValue(e.target.value);
							}}
						/>
						{errorMessage && (
							<div className="error-message">{errorMessage}</div>
						)}
						<Button type="submit">Enter</Button>
					</form>
				</Flex>
			)}
		</>
	);
}