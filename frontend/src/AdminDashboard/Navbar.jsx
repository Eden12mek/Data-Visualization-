import React from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  useColorMode,
} from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
 

  return (
    <Box
      py={2}
      bgGradient="linear(to-b, #072F49,#072F49 )"
      position="sticky"
      top={0}
      height={70}
      ml={250}
     
    >
      <Container maxW="container.lg">
        <Flex justify="space-between">
          <Box w="40%" ml={700} mt={2}  >
            <Input
              type="text"
              placeholder="Search..."
              borderRadius="md"
              bg={colorMode === "light" ? "white" : "gray.800"}
              h={10}
              py={1}
              
              color={colorMode === "light" ? "gray.800" : "white"}
              _placeholder={{
                color: colorMode === "light" ? "gray.500" : "gray.300",
              }}
              _focus={{ outline: "none" }}
            />
          </Box>
          
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
