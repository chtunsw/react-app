import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import IndexPage from "../pages/IndexPage"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"
import NotFoundPage from "../pages/NotFoundPage"
import CustomerListPage from "../pages/CustomerListPage"
import CustomerDetailPage from "../pages/CustomerDetailPage"
import NestedListPage from "../pages/NestedListPage"
import LoginPage from "../pages/LoginPage"
import PrivatePage from "../pages/PrivatePage"

import PrivateRoute from './PrivateRoute'

// 同时使用 react-redux 和 react-router
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={IndexPage} />
        <Route path='/1' component={Page1} />
        <Route path='/2' component={Page2} />
        <Route exact path='/customers' component={CustomerListPage} />
        <Route path='/customers/:id' component={CustomerDetailPage} />
        <Route path='/nested' component={NestedListPage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/private' component={PrivatePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
)

// 类型检查帮助debug
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root