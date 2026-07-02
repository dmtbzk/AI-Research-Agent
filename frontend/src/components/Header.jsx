import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box bg="blue.600" color="white" shadow="md">
      <Container maxW="container.lg">
        <Flex align="center" py={4} gap={3}>
          <Text fontSize="2xl">🔍</Text>
          <Box>
            <Heading size="md" fontWeight="bold">
              AI Research Agent
            </Heading>
            <Text fontSize="xs" opacity={0.8}>
              Yapay zeka destekli araştırma asistanı
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
