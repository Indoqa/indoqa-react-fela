import React from 'react'
import {Box, extendBox} from '../../main'

const ExtendedBox = extendBox(() => ({
  backgroundColor: 'blue',
  color: 'white',
  width: '100px',
  height: '100px',
}))

class DemoApp extends React.Component {
  render() {
    return (
      <Box>
        <Box>
          Simple Box
        </Box>
        <ExtendedBox>
          Extended Box
        </ExtendedBox>
      </Box>

    )
  }
}

export default DemoApp
