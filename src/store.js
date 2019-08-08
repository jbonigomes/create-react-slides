import { createStore } from 'redux'
import { routes } from './routes'

const defaultState = { slide: 0, len: routes.length }

export const store = createStore((state = defaultState, action = {}) => {
  switch (action.type) {
    case 'next': {
      return {
        ...state,
        previous: state.slide,
        slide: state.len - 1 > state.slide ? state.slide + 1 : 0,
      }
    }

    case 'back': {
      return {
        ...state,
        previous: state.slide,
        slide: state.slide > 0 ? state.slide - 1 : 0,
      }
    }

    default: {
      return state
    }
  }
})