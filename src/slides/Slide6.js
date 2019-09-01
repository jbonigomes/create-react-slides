import React from 'react'
import Img from '../components/Img'
import Step from '../components/Step'
import Slide from '../components/Slide'

export default () => (
  <Slide>
    <Step>
      <h1>Step 1</h1>
      <p>You can navigate throught steps using the up and down arrows</p>
      <p>
        <em>↑</em> <em>↓</em>
      </p>
    </Step>

    <Step>
      <h1>Step 2</h1>
      <p>You can navigate throught steps using the up and down arrows</p>
      <p>
        <em>↑</em> <em>↓</em>
      </p>
    </Step>

    <Step>
      <h1>Step 3</h1>
      <p>You can navigate throught steps using the up and down arrows</p>
      <p>
        <em>↑</em> <em>↓</em>
      </p>
    </Step>
  </Slide>
)
