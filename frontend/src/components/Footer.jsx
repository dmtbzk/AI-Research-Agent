import { Box, Container, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg="gray.100" borderTop="1px" borderColor="gray.200" mt="auto">
      <Container maxW="container.lg">
        <Text py={4} textAlign="center" fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} AI Research Agent — LangGraph + FastAPI
        </Text>
      </Container>
    </Box>
  )
}
