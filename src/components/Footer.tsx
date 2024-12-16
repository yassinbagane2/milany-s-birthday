import { Flex, Text } from "@/once-ui/components"

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            position="relative"
            fillWidth padding="8"
            justifyContent="center" mobileDirection="column">
            <Text
                variant="body-default-s"
                onBackground="neutral-strong">
                <Text
                    onBackground="neutral-weak">
                    © {currentYear} - Dedicated to the world’s most lovable puppy. 🐶💕
                </Text>
            </Text>
        </Flex>
    )
}