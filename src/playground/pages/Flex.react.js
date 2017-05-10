import React from 'react'
import {Box, Flex, Text} from '../../main'

class DemoApp extends React.Component {
  render() {
    return (
      <Box>
        <Box p={1}>
          <Text bold> Flexbox default (align:start, justify:start)</Text>
          <Flex bg="light" height={200}>
            <Box bg="highlight" p={1} m={1}> 1 </Box>
            <Box bg="highlight" p={1} m={1}> 2 </Box>
            <Box bg="highlight" p={1} m={1}> 3 </Box>
          </Flex>
        </Box>
        <Box p={1}>
          <Text bold> Flexbox center</Text>
          <Flex center bg="light" height={200}>
            <Box bg="highlight" p={1} m={1}> 1 </Box>
            <Box bg="highlight" p={1} m={1}> 2 </Box>
            <Box bg="highlight" p={1} m={1}> 3 </Box>
          </Flex>
        </Box>
        <Box p={1}>
          <Text bold> Flexbox stretch and grow</Text>
          <Flex bg="light" stretch height={200}>
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
          <Flex bg="light" alignItems="center" height={200}>
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
