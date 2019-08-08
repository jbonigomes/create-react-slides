import React from 'react'
import images from '../../img/*.*'
import styles from './index.scss'

export default ({ src, round, small, large }) => (
  <img
    src={Object.values(images[src])[0]}
    className={[
      round ? styles.round : '',
      small ? styles.small : '',
      large ? styles.large : '',
    ].join(' ')}
  />
)
