import React from 'react'
import Step from '../components/Step'
import Slide from '../components/Slide'
import Highlight from '../components/Highlight'

export default () => (
  <Slide>
    <Step>
      <h1>Code highlighting</h1>
      <p>Code can be highlighted</p>
      <Highlight language="javascript">
        {`
          // sample JavaScript code
          console.log('a message here')
        `}
      </Highlight>
    </Step>
  </Slide>
)
