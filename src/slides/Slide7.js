import React from 'react'
import Row from '../components/Row'
import Col from '../components/Col'
import Step from '../components/Step'
import Slide from '../components/Slide'

export default () => (
  <Slide>
    <Step>
      <h1>Columns...</h1>
      <p>... are equally divided within a <strong>Row</strong></p>
      <Row>
        <Col>I am col 1</Col>
        <Col>I am col 2</Col>
        <Col>I am col 3</Col>
      </Row>
    </Step>
  </Slide>
)
