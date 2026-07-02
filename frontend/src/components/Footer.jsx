import { Box, Container, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box borderTop="1px" borderColor="gray.100">
      <Container maxW="container.lg">
        <Text py={5} textAlign="center" fontSize="xs" color="gray.400">
          © {new Date().getFullYear()} AI Research Agent
        </Text>
      </Container>
    </Box>
  )
}
