import React, { useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { connect } from 'react-redux'
import { routes } from '../../routes'

import styles from './index.scss'

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
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 37) {
        back()
      }

      if (e.keyCode === 39 || e.keyCode === 32) {
        next()
      }
    })
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
      <Clock minutes={15} />
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Presentation)
