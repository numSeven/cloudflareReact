import { Heading, Text, Button, VStack } from '@chakra-ui/react'

function Home() {
  return (
    <VStack spacing={6} align="center" py={10}>
      <Heading size="2xl">欢迎来到我的 React 应用</Heading>
      <Text fontSize="xl" textAlign="center" maxW="container.md">
        这是一个使用 React、React Router 和 Chakra UI 构建的现代化单页应用。
        你可以基于这个模板开始构建你自己的应用。
      </Text>
      <Button colorScheme="blue" size="lg">
        开始探索
      </Button>
    </VStack>
  )
}

export default Home 