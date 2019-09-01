import React from 'react'
import Img from '../components/Img'
import Step from '../components/Step'
import Slide from '../components/Slide'

export default () => (
  <Slide>
    <Step>
      <h1>Sample round image</h1>
      <p>Square images can be rounded</p>
      <Img src={'square'} round small />
    </Step>
  </Slide>
)
