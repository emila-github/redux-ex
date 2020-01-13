import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import IndexView from './views/Index'
import NotFoundView from './views/NotFound'
import CounterView from './views/Counter'
import TestRequestView from './views/TestRequest'

const pages = [
  ['/', IndexView],
  ['/counter', CounterView],
  ['/test-request', TestRequestView],
  ['*', NotFoundView]
]

export default () => {
  return (
    <Router>
      <Switch>
        {pages.map(([path, view]) => (
          <Route exact key={path} path={path} component={view}></Route>
        ))}
      </Switch>
    </Router>
  )
}
