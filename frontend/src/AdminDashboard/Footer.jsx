import React from "react";
import { Box, Text, Link, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { RiGithubFill, RiTwitterFill, RiMailFill } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaBriefcase } from "react-icons/fa";

const Footer = () => {
  const footerBgColor = useColorModeValue("gray.100", "gray.700");
  const iconColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      bg={footerBgColor}
      py={4}
      position="fixed"
      bottom={0}
      width="90%"
      ml={-5}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm" color="gray.500">
          &copy; Eden Mekonnen 2024
        </Text>
        <Flex alignItems="center">
          <Link mx={2} fontSize="sm" color="gray.500">
            Privacy Policy
          </Link>
          <Link mx={2} fontSize="sm" color="gray.500">
            Terms of Service
          </Link>
          <Link href="https://github.com/Eden12mek" isExternal mx={2}>
            <Icon as={RiGithubFill} boxSize={5} color={iconColor} />
          </Link>
          <Link href="https://x.com/Edu12moke" isExternal mx={2}>
            <Icon as={RiTwitterFill} boxSize={5} color={iconColor} />
          </Link>
          <Link href="https://eden12mekonnen@gmail.com" isExternal mx={2}>
            <Icon as={RiMailFill} boxSize={5} color={iconColor} />
          </Link>
          <Link href="https://edenmekonnen.netlify.app/" isExternal mx={2}>
            <Icon as={FaBriefcase} boxSize={5} color={iconColor} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
