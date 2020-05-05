import React from "react";

import "./Form.css";

class Form extends React.Component {
  state = {
    newProduct: 0,
  };
  render() {
    return (
      <form>
        <h2>Ajouter un produit</h2>
        <div className="input-container">
          <label htmlFor="name">Nom : </label>
          <input id="name" value="" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="price">Prix : </label>
          <input id="price" value="" type="number" />
        </div>
        <input id='submit' type="submit" value="Ajouter" />
      </form>
    );
  }
}

export default Form;
