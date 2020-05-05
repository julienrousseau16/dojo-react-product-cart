import React from "react";

import Form from "./components/Form";
import Tab from "./components/Tab";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ma commande</h1>
        <Tab />
        <Form />
      </div>
    );
  }
}

export default App;
