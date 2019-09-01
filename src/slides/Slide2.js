import React from 'react'
import Img from '../components/Img'
import Step from '../components/Step'
import Slide from '../components/Slide'

export default () => (
  <Slide>
    <Step>
      <h1>Sample small image</h1>
      <p>Images can be configured to display in a small size</p>
      <Img src={'sample'} small />
    </Step>
  </Slide>
)
