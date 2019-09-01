import React from 'react'
import Img from '../components/Img'
import Step from '../components/Step'
import Slide from '../components/Slide'

export default () => (
  <Slide>
    <Step>
      <h1>Sample large image</h1>
      <p>Large images can be limited to the slide width</p>
      <Img src={'sample'} large />
    </Step>
  </Slide>
)
