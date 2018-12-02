import React, { Component } from 'react';
import './App.css';
import jquery from "jquery";
import "bootstrap/dist/css/bootstrap.css";

import CountryList from "./components/country-list/country-list"

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountryList />
      </div>
    );
  }
}

export default App;
