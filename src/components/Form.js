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
          <input id="name" type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="price">Prix : </label>
          <input id="price" type="number" />
        </div>
        <input id='submit' type="submit" value="Ajouter" onClick={this.props.newProduct} />
      </form>
    );
  }
}

export default Form;
