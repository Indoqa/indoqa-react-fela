import React from 'react'
import {Box, View, Text, Spacer, Header} from '../main'

import { createComponent } from 'react-fela'

class DemoApp extends React.Component {
  render() {
    return (
      <View>
        <Box>
          <Box padding={20}>
            <Text bold> paragraph font sizes: </Text>
            <Spacer size={'20'}></Spacer>
            <Text veryBig> Very big text  </Text>  
            <Text big> Big text  </Text>  
            <Text> Default theme text </Text>
            <Text small> Small text  </Text>  
            <Text verySmall> Very small text  </Text>  
          </Box>
          <Box padding={20}>
            <Text bold> Headers: </Text>
            <Spacer size={'20'}></Spacer>
            <Header level={1}> header 1 </Header>
            <Header level={2}> header 2 </Header>
            <Header level={3}> header 3 </Header>
            <Header level={4}> header 4 </Header>
            <Header level={5}> header 5 </Header>  
          </Box>
        </Box>
      </View>
    )
  }
}

export default DemoApp
