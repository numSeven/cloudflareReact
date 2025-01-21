import { Box, Heading, Text, VStack, List, ListItem, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

function About() {
  return (
    <VStack spacing={6} align="start" py={10}>
      <Heading size="xl">关于我们</Heading>
      <Text fontSize="lg">
        这是一个示例 React 应用，展示了如何使用现代化的工具和库来构建单页应用。
      </Text>
      
      <Box>
        <Heading size="md" mb={4}>我们使用的技术：</Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            React - 用于构建用户界面
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            React Router - 处理路由导航
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Chakra UI - 现代化的 UI 组件库
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            Vite - 快速的开发构建工具
          </ListItem>
        </List>
      </Box>
    </VStack>
  )
}

export default About 