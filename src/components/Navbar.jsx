import { Box, Flex, Link as ChakraLink, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Navbar() {
  return (
    <Box bg="gray.100" px={4} py={4}>
      <Flex maxW="container.xl" mx="auto" align="center" justify="space-between">
        <Heading size="md">My React App</Heading>
        <Flex gap={4}>
          <ChakraLink as={RouterLink} to="/">首页</ChakraLink>
          <ChakraLink as={RouterLink} to="/about">关于</ChakraLink>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 