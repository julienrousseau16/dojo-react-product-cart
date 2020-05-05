import React from "react";

import Form from './Form'

import './Form.css'

const initialProductList = [
  { id: 1, name: "produit 1", price: 50, quantity: 1 },
  { id: 2, name: "produit 2", price: 75, quantity: 2 },
  { id: 3, name: "produit 3", price: 20, quantity: 5 },
];

class Tab extends React.Component {
  state = {
    products: initialProductList,
  };

  newProduct = () => {
      const name = document.getElementById('name')
      const price = document.getElementById('price')
      console.log(name.value, price.value)
  }

  quantityInput = (e) => {
    const productsLocal = this.state.products;
    const line = productsLocal.findIndex(
      (item) => item.id === parseInt(e.target.name)
    );
    productsLocal[line].quantity = parseInt(e.target.value);
    if (productsLocal[line].quantity === 0) {
      if (window.confirm("Etes-vous sûr.e de bien vouloir retirer ce produit de la liste ?")) {
        delete productsLocal[line]
      }
    }
    this.setState({ products: productsLocal });
  };

  render() {
    const unitTotal = this.state.products.map(
      (product) => product.price * product.quantity
    );
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
      <div>
        <table>
          <thead>
            <td>Produit</td>
            <td>Prix Unitaire</td>
            <td>Quantité</td>
            <td>Prix total</td>
          </thead>
          {this.state.products.map((product) => {
            return (
              <tbody key={product.id}>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>
                  <input
                    type="number"
                    name={product.id}
                    value={product.quantity}
                    onChange={this.quantityInput}
                  />
                </td>
                <td>{product.price * product.quantity} €</td>
              </tbody>
            );
          })}
        </table>
        <p>
          Montant de la commande :{" "}
          <span style={{ fontWeight: "bold" }}>
            {unitTotal.reduce(reducer)} €
          </span>
        </p>
        <Form newProduct={this.newProduct} />
      </div>
    );
  }
}

export default Tab;
