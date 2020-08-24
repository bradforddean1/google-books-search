import React from "react";
import "./App.css";
import PropTypes from "prop-types";

/**
 *
 *@component
 */
class App extends React.Component {
  static defaultProps = {};

  render() {
    return <div className="App">{/* content goes here */}</div>;
  }
}

App.propTypes = {
  /**
   * Example prop
   */
  example: PropTypes.string.isRequired,
};

export default App;
