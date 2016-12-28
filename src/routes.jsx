import React from 'react'
import {Router, Route, hashHistory} from 'react-router'

import Main from './units/main'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main} />
  </Router>
)
