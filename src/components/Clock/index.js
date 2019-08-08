import * as d3 from 'd3'
import React, { useEffect } from 'react'

import styles from './index.scss'

const draw = (mins) => {
  const width = 60
  const height = 60
  const radius = 50
  const spacing = .2

  let minutes = 0
  let seconds = 0

  const fields = () => {
    seconds = seconds + (1 / 60)

    if (seconds >= 1) {
      seconds = 0
      minutes = minutes + (1 / mins)

      if (minutes >= 1) {
        minutes = 0
      }
    }

    return [
      { index: .4, value: minutes },
      { index: .1, value: seconds },
    ]
  }

  const tick = () => {
    field
      .each((d, i, arr) => arr[i]._value = d.value)
      .data(fields)
      .each((d, i, arr) => d.previousValue = arr[i]._value)
      .transition()
      .duration(500)
      .each((_, i, arr) => {
        d3
          .select(arr[i])
          .transition()
          .select('.arc-body')
          .attrTween('d', (d) => {
            const i = d3.interpolateNumber(d.previousValue, d.value)
            const arc = d3
              .arc()
              .startAngle(0)
              .endAngle((d) => d.value * 2 * Math.PI)
              .innerRadius((d) => d.index * radius)
              .outerRadius((d) => (d.index + spacing) * radius)
              .cornerRadius(3)

            return (t) => {
              d.value = i(t)
              return arc(d)
            }
          })
          .style('fill', (d) =>
            d3
              .scaleLinear()
              .range(['hsl(-180,60%,50%)', 'hsl(180,60%,50%)'])
              .interpolate((a, b) => {
                const i = d3.interpolateString(a, b)
                return (t) => d3.hsl(i(t))
              })(d.value))
      })

    setTimeout(tick, 1000)
  }

  const field = d3
    .select('#clock')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .selectAll('g')
    .data(fields)
    .enter()
    .append('g')

  field.append('path').attr('class', 'arc-body')
  d3.select(self.frameElement).style('height', `${height}px`)
  tick()
}

export default ({ minutes }) => {
  useEffect(() => draw(minutes), [])

  return (
    <div id="clock" className={styles.clock} />
  )
}
