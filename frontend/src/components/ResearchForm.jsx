import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  Heading,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from 'react'

export default function ResearchForm({ onSubmit, isLoading }) {
  const [topic, setTopic] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (topic.trim()) onSubmit(topic.trim())
  }

  return (
    <Box w="full">
      <VStack spacing={8} align="center" textAlign="center" mb={8}>
        <VStack spacing={2}>
          <Heading size="xl" fontWeight="800" color="gray.900" letterSpacing="tight">
            What do you want to research?
          </Heading>
          <Text color="gray.500" fontSize="md">
            Enter any topic and get a comprehensive AI-generated research report.
          </Text>
        </VStack>
      </VStack>

      <form onSubmit={handleSubmit}>
        <VStack spacing={3} maxW="2xl" mx="auto">
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none" h="full">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. the impact of AI on healthcare"
              bg="white"
              border="1px"
              borderColor="gray.200"
              borderRadius="xl"
              fontSize="md"
              h={14}
              pl={12}
              _placeholder={{ color: 'gray.400' }}
              _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 3px rgba(66,153,225,0.15)' }}
              isDisabled={isLoading}
            />
          </InputGroup>
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            w="full"
            h={12}
            borderRadius="xl"
            fontWeight="600"
            isLoading={isLoading}
            loadingText="Researching..."
            isDisabled={!topic.trim()}
            _hover={{ transform: 'translateY(-1px)', shadow: 'md' }}
            transition="all 0.15s"
          >
            Research
          </Button>
        </VStack>
      </form>
    </Box>
  )
}
