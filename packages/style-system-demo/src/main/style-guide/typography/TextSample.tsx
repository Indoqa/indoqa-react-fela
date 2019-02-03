import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

interface Props {
  fontStyles: IStyle,
  as?: keyof React.ReactHTML,
}

const TextSample: React.FunctionComponent<Props> = ({fontStyles, children, as}) => {
  const style: IStyle = {
    paddingBottom: 0,
  }
  return (
    <FelaComponent style={[style, fontStyles]} as={as || 'p'}>
      {children}
    </FelaComponent>
  )
}

export default TextSample
