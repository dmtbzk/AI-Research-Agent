import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.lg" py={12}>
        <VStack spacing={4} align="center">
          <Heading size="xl" color="blue.600">
            AI Research Agent
          </Heading>
          <Text color="gray.500">
            Chakra UI hazır, adım adım devam ediyoruz.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}
