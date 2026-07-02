import { Box, Heading, Text, Badge, Divider, VStack } from '@chakra-ui/react'

export default function ResearchResult({ topic, report }) {
  return (
    <Box bg="white" p={8} borderRadius="xl" shadow="sm" border="1px" borderColor="gray.200">
      <VStack spacing={4} align="start">
        <Badge colorScheme="blue" fontSize="xs" px={2} py={1} borderRadius="md">
          Araştırma Sonucu
        </Badge>
        <Heading size="md" color="gray.800">
          {topic}
        </Heading>
        <Divider />
        <Text color="gray.700" lineHeight="tall" whiteSpace="pre-wrap">
          {report}
        </Text>
      </VStack>
    </Box>
  )
}
