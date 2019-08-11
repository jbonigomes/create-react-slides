import * as d3 from 'd3'
import React, { useEffect } from 'react'

import styles from './index.scss'

const draw = (mins) => {
  let minutes = 0
  let seconds = 0

  const svg = d3
    .select('#clock')
    .append('svg')
    .attr('width', 60)
    .attr('height', 60)
    .append('g')
    .attr('transform', 'translate(30, 30)')
    .selectAll('g')
    .data([{}, {}])
    .enter()
    .append('g')
    .append('path')

  const layers = () => {
    seconds = seconds + 1 / 60

    if (seconds >= 1) {
      seconds = 0
      minutes = minutes + 1 / mins

      if (minutes >= 1) {
        minutes = 0
      }
    }

    return [
      { index: 0.4, color: '#357', value: minutes },
      { index: 0.1, color: '#B68', value: seconds },
    ]
  }

  const tick = () => {
    svg.data(layers).each((layer, i, arr) =>
      d3
        .select(arr[i].parentNode)
        .transition()
        .select('path')
        .style('fill', layer.color)
        .attrTween('d', () => () =>
          d3
            .arc()
            .startAngle(0)
            .endAngle(() => layer.value * 2 * Math.PI)
            .innerRadius(() => layer.index * 50)
            .outerRadius(() => (layer.index + 0.2) * 50)
            .cornerRadius(3)(),
        ),
    )

    setTimeout(tick, 1000)
  }

  tick()
}

export default ({ minutes }) => {
  useEffect(() => draw(minutes), [])
  return <div id="clock" className={styles.clock} />
}
