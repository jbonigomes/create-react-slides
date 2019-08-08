import React from 'react'
import Highlight from '../components/Highlight'

export default () => (
  <>
    <h1>Code highlighting</h1>
    <p>Code can be highlighted</p>
    <Highlight language="javascript">
      {`
        // sample JavaScript code
        console.log('a message here')
      `}
    </Highlight>
  </>
)
