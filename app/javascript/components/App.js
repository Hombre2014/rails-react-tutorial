import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter, Route } from "react-router-dom"
import HelloWorld from './HelloWorld'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => ("Home!")} />
        <Route path="/hello" render={() => <HelloWorld greeting="Friend"/>} />
      </BrowserRouter>
    );
  }
}

export default App
