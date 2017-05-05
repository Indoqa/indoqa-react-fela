import React from 'react'
import {Box, Text, Header} from '../main'

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
      </Box>
    )
  }
}

export default DemoApp
