import { Container, Text, VStack, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Blog</Text>
        <Text>Explore our latest posts and updates.</Text>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
        <Button as={Link} to="/create-post" colorScheme="teal">
          Create New Post
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;