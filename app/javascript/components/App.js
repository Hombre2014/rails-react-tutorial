import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HelloWorld from './HelloWorld';
import Home from './Home';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route exact path = "/" element={<Home />} />
          <Route path = "/hello" element={<HelloWorld greeting="Friend"/> } />
        </Routes>
      </Router>
    );
  }
}

export default App
