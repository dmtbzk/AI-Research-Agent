import { Box, Container, VStack, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ResearchForm from './components/ResearchForm.jsx'
import ResearchResult from './components/ResearchResult.jsx'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)
  const toast = useToast()

  const handleSubmit = async (topic) => {
    setIsLoading(true)
    setResult(null)
    try {
      const res = await fetch('/api/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      })
      if (!res.ok) throw new Error('Sunucu hatası')
      const data = await res.json()
      setResult({ topic, report: data.report })
    } catch (err) {
      toast({
        title: 'Hata',
        description: err.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box minH="100vh" bg="gray.50" display="flex" flexDirection="column">
      <Header />
      <Container maxW="container.lg" py={10} flex="1">
        <VStack spacing={6}>
          <ResearchForm onSubmit={handleSubmit} isLoading={isLoading} />
          {result && <ResearchResult topic={result.topic} report={result.report} />}
        </VStack>
      </Container>
      <Footer />
    </Box>
  )
}
