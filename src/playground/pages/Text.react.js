import React from 'react'
import {Box, Text} from '../../main'

class DemoApp extends React.Component {
  render() {
    return (
      <Box>
        <Box p={1}>
          <Text size="veryBig"> Very big text</Text>
          <Text size="big"> Big text</Text>
          <Text> Default theme text </Text>
          <Text size="small"> Small text</Text>
          <Text size="verySmall"> Very small text</Text>
          <Text bold> bold </Text>
        </Box>
      </Box>
    )
  }
}

export default DemoApp
