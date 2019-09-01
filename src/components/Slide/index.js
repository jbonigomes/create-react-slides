import React, { useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { throttle } from 'lodash'
import { connect } from 'react-redux'

import styles from './index.scss'

const mapStateToProps = (state) => ({
  step: state.step,
})

const mapDispatchToProps = (dispatch) => ({
  next: (steps) => dispatch({ type: 'next-step', steps }),
  back: (steps) => dispatch({ type: 'back-step', steps }),
})

const Slide = ({ back, next, step, children }) => {
  useEffect(() => {
    const handler = throttle((e) => {
      if (e.keyCode === 38) {
        back(React.Children.count(children))
      }

      if (e.keyCode === 40) {
        next(React.Children.count(children))
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
          leave: styles.leave,
          enter: styles.enter,
          enterActive: styles.enterActive,
          leaveActive: styles.leaveActive,
        }}
      >
        {React.Children.map(children, (child, i) => {
          if (i === step) return child
        })}
      </ReactCSSTransitionGroup>
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Slide)
