import { useState, useEffect } from "react";
import { Container, VStack, Box, Heading, Text, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from local storage or an API
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading>All Posts</Heading>
        {posts.length === 0 ? (
          <Text>No posts available.</Text>
        ) : (
          posts.map((post, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" width="100%">
              <Heading size="md">{post.title}</Heading>
              <Text mt={2}>{post.content}</Text>
            </Box>
          ))
        )}
      <HStack spacing={4}>
          <Button as={Link} to="/" colorScheme="teal">
            Home
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Posts;