import { useState } from "react";
import { Container, VStack, Input, Textarea, Button, Heading, useToast } from "@chakra-ui/react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const toast = useToast();

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
      console.log("Post submitted:", { title, content });
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