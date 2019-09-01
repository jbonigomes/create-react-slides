import { createStore } from 'redux'
import { routes } from './routes'

const defaultState = { slide: 0, step: 0, len: routes.length }

export const store = createStore((state = defaultState, action = {}) => {
  switch (action.type) {
    case 'next': {
      return {
        ...state,
        step: 0,
        previous: state.slide,
        slide: state.len - 1 > state.slide ? state.slide + 1 : 0,
      }
    }

    case 'back': {
      return {
        ...state,
        step: 0,
        previous: state.slide,
        slide: state.slide > 0 ? state.slide - 1 : 0,
      }
    }

    case 'next-step': {
      return {
        ...state,
        step: action.steps - 1 > state.step ? state.step + 1 : 0,
      }
    }

    case 'back-step': {
      return {
        ...state,
        step: state.step > 0 ? state.step - 1 : 0,
      }
    }

    default: {
      return state
    }
  }
})
