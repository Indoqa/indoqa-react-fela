import React from 'react'
import {Box, Flex, Text, Header} from '../main'

class DemoApp extends React.Component {
  render() {
    return (
      <Box>
        <Box p={1}>
          <Text bold mb={2}> paragraph font sizes: </Text>
          <Text size="veryBig"> Very big text</Text>
          <Text size="big"> Big text</Text>
          <Text> Default theme text </Text>
          <Text size="small"> Small text</Text>
          <Text size="verySmall"> Very small text</Text>
        </Box>
        <Box p={1}>
          <Text bold mb={2}> Headers: </Text>
          <Header level={1}> header 1 </Header>
          <Header level={2}> header 2 </Header>
          <Header level={3}> header 3 </Header>
          <Header level={4}> header 4 </Header>
          <Header level={5}> header 5 </Header>
        </Box>
        <Box p={1}>
          <Text font="special"> Text in a different theme font!! </Text>
        </Box>
        <Box p={1}>
          <Text bold> Flexbox default (align:start, justify:start)</Text>
          <Flex bg="light" height={300}>
            <Box bg="highlight" p={1} m={1}> 1 </Box>
            <Box bg="highlight" p={1} m={1}> 2 </Box>
            <Box bg="highlight" p={1} m={1}> 3 </Box>
          </Flex>
        </Box>
        <Box p={1}>
          <Text bold> Flexbox center</Text>
          <Flex center bg="light" height={300}>
            <Box bg="highlight" p={1} m={1}> 1 </Box>
            <Box bg="highlight" p={1} m={1}> 2 </Box>
            <Box bg="highlight" p={1} m={1}> 3 </Box>
          </Flex>
        </Box>
        <Box p={1}>
          <Text bold> Flexbox stretch and grow</Text>
          <Flex bg="light" stretch height={300}>
            <Box bg="highlight" p={1} m={1} grow={1}> 1 </Box>
            <Box bg="highlight" p={1} m={1} grow={2}> 2 </Box>
            <Box bg="highlight" p={1} m={1} grow={1}> 3 </Box>
          </Flex>
        </Box>
        <Box p={1}>
          <Text bold> Flexbox stretch without grow but center horizontally</Text>
          <Flex bg="light" justifyContent="center" stretch height={300}>
            <Box bg="highlight" p={1} m={1}> 1 </Box>
            <Box bg="highlight" p={1} m={1}> 2 </Box>
            <Box bg="highlight" p={1} m={1}> 3 </Box>
          </Flex>
        </Box>
        <Box p={1}>
          <Text bold> Flexbox grow without stretch but center vertically</Text>
          <Flex bg="light" alignItems="center" height={300}>
            <Box bg="highlight" p={1} m={1} grow={1}> 1 </Box>
            <Box bg="highlight" p={1} m={1} grow={2}> 2 </Box>
            <Box bg="highlight" p={1} m={1} grow={1}> 3 </Box>
          </Flex>
        </Box>
      </Box>
    )
  }
}

export default DemoApp
