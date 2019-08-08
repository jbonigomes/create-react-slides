import React from 'react'
import WebFont from 'webfontloader'

import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Presentation from './components/Presentation'

import { store } from './store'

WebFont.load({
  google: {
    families: ['Lobster Two', 'Source Code Pro'],
  },
})

render(
  <Provider store={store}>
    <Presentation />
  </Provider>,
  document.getElementById('root'),
)
