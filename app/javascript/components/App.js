import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HelloWorld from './HelloWorld';
import Home from './Home';
import { Provider } from 'react-redux';

import configureStore from '../redux/configureStore';
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path = "/" element={<Home />} />
            <Route path = "/hello" element={<HelloWorld greeting="Friend"/> } />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App
