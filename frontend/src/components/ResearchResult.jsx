import {
  Box,
  Heading,
  Text,
  Badge,
  Divider,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function ResearchResult({ topic, report }) {
  return (
    <Box
      w="full"
      bg="white"
      border="1px"
      borderColor="gray.100"
      borderRadius="2xl"
      shadow="sm"
      overflow="hidden"
    >
      <Box bg="blue.50" px={8} py={5} borderBottom="1px" borderColor="blue.100">
        <HStack spacing={3}>
          <Icon as={CheckCircleIcon} color="blue.500" boxSize={5} />
          <VStack align="start" spacing={0}>
            <Badge colorScheme="blue" fontSize="2xs" letterSpacing="wider" textTransform="uppercase">
              Research Complete
            </Badge>
            <Heading size="sm" color="gray.800" mt={1}>
              {topic}
            </Heading>
          </VStack>
        </HStack>
      </Box>

      <Box px={8} py={6}>
        <Text
          color="gray.700"
          lineHeight="1.8"
          fontSize="sm"
          whiteSpace="pre-wrap"
        >
          {report}
        </Text>
      </Box>
    </Box>
  )
}
