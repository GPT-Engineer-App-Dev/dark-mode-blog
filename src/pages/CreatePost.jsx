import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, VStack, Input, Textarea, Button, Heading, useToast } from "@chakra-ui/react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title || !content) {
      toast({
        title: "Error",
        description: "Title and content are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      // Logic to handle post submission
      const newPost = { title, content };
      const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      storedPosts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(storedPosts));
      console.log("Post submitted:", newPost);
      toast({
        title: "Success",
        description: "Post submitted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Clear the form
      setTitle("");
      setContent("");
      // Navigate to home page
      navigate("/");
    } catch (error) {
      console.error("Error submitting post:", error);
      toast({
        title: "Error",
        description: "An error occurred while submitting the post.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading>Create a New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Container>
  );
};

export default CreatePost;