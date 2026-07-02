import { Box, Container, Flex, Heading, Text, Icon } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function Header() {
  return (
    <Box bg="white" borderBottom="1px" borderColor="gray.100" shadow="sm">
      <Container maxW="container.lg">
        <Flex align="center" py={4} gap={3}>
          <Flex
            align="center"
            justify="center"
            bg="blue.500"
            borderRadius="lg"
            w={9}
            h={9}
          >
            <SearchIcon color="white" boxSize={4} />
          </Flex>
          <Box>
            <Heading size="sm" fontWeight="700" color="gray.900" letterSpacing="tight">
              AI Research Agent
            </Heading>
            <Text fontSize="xs" color="gray.400">
              Powered by LangGraph + FastAPI
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
