import { Box, Container } from '@chakra-ui/react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <Box minH="100vh" bg="gray.50" display="flex" flexDirection="column">
      <Header />
      <Container maxW="container.lg" py={10} flex="1">
        {/* sayfa içeriği buraya gelecek */}
      </Container>
      <Footer />
    </Box>
  )
}
