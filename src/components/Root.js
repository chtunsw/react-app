import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Page_Index from "../pages/Page_Index"
import Page_1 from "../pages/Page_1"
import Page_2 from "../pages/Page_2"

// 同时使用 react-redux 和 react-router
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <div>
            <Route exact path='/' component={Page_Index} />
            <Route path='/1' component={Page_1} />
            <Route path='/2' component={Page_2} />
        </div>
    </Router>
  </Provider>
)

// 类型检查帮助debug
Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root