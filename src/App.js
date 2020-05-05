import React from "react";

import Tab from "./components/Tab";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ma commande</h1>
        <Tab />
      </div>
    );
  }
}

export default App;
