import React from "react";

const initialProductList = [
  { id: 1, name: "produit 1", price: 50, quantity: 1 },
  { id: 2, name: "produit 2", price: 75, quantity: 2 },
  { id: 3, name: "produit 3", price: 20, quantity: 5 },
];

class Tab extends React.Component {
  state = {};

  render() {
    return (
      <table>
        <thead>
          <td>Produit</td>
          <td>Prix Unitaire</td>
          <td>Quantité</td>
          <td>Prix total</td>
        </thead>
        {initialProductList.map((produit) => {
          return (
            <tbody>
              <td>{produit.name}</td>
              <td>{produit.price} €</td>
              <td>{produit.quantity}</td>
              <td>{produit.price * produit.quantity}</td>
            </tbody>
          );
        })}
      </table>
    );
  }
}

export default Tab;
