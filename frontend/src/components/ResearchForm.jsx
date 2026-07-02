import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function ResearchForm({ onSubmit, isLoading }) {
  const [topic, setTopic] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (topic.trim()) onSubmit(topic.trim())
  }

  return (
    <Box bg="white" p={8} borderRadius="xl" shadow="sm" border="1px" borderColor="gray.200">
      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <Text fontSize="lg" fontWeight="semibold" color="gray.700" alignSelf="start">
            Araştırma Konusu
          </Text>
          <FormControl>
            <FormLabel color="gray.600" fontSize="sm">
              Araştırmak istediğiniz konuyu girin
            </FormLabel>
            <Input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="örn: yapay zekanın sağlık alanındaki etkileri"
              size="lg"
              focusBorderColor="blue.500"
              isDisabled={isLoading}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            width="full"
            isLoading={isLoading}
            loadingText="Araştırılıyor..."
            isDisabled={!topic.trim()}
          >
            Araştır
          </Button>
        </VStack>
      </form>
    </Box>
  )
}
