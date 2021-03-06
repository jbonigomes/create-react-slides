import React, { useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { throttle } from 'lodash'
import { connect } from 'react-redux'

import Clock from '../Clock'
import styles from './index.scss'

import { routes } from '../../routes'

const mapStateToProps = (state) => ({
  slide: state.slide,
  direction: state.slide > state.previous ? 'Forward' : 'Backward',
})

const mapDispatchToProps = (dispatch) => ({
  next: () => dispatch({ type: 'next' }),
  back: () => dispatch({ type: 'back' }),
})

const Presentation = ({ back, next, slide, direction }) => {
  useEffect(() => {
    const handler = throttle((e) => {
      if (e.keyCode === 37) {
        back()
      }

      if (e.keyCode === 39 || e.keyCode === 32) {
        next()
      }
    }, 500)

    document.addEventListener('keydown', handler)

    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <ReactCSSTransitionGroup
        className={styles.wrapper}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionName={{
          leave: styles[`leave${direction}`],
          enter: styles[`enter${direction}`],
          enterActive: styles[`enterActive${direction}`],
          leaveActive: styles[`leaveActive${direction}`],
        }}
      >
        <div key={slide}>{routes[slide]}</div>
      </ReactCSSTransitionGroup>
      <Clock minutes={5} />
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Presentation)
