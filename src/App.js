import React from 'react';
import './App.scss';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  chooseProduct = (product) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.concat(product),
    }));
  }

  deleteProduct = (product) => {
    this.setState(prevState => ({
      selectedGoods:
      prevState.selectedGoods.filter(produce => produce !== product),
    }));
  }

  clearProductList = () => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.splice(),
    }));
  }

  makeProductList = () => {
    if (this.state.selectedGoods.length === 0) {
      return 'No goods selected';
    }

    return this.state.selectedGoods.join(' , ');
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="title">
          Selected good:
          {this.makeProductList()}
        </h1>
        {!!this.state.selectedGoods.length
          && (
            <button
              type="button"
              className="deleteButton"
              onClick={() => this.clearProductList()}
            >
              Clear product list  X
            </button>
          )}
        <ul className="list">
          {goodsFromServer.map((product) => {
            const productList = this.state.selectedGoods.includes(product);

            return (
              <React.Fragment key={product}>
                <li className={
                  productList
                    ? 'added'
                    : 'noAdd'
                  }
                >
                  { product }
                </li>
                <button
                  type="button"
                  className={
                    productList
                      ? 'removeButton'
                      : 'addButton'
                  }
                  onClick={
                    productList
                      ? () => {
                        this.deleteProduct(product);
                      }
                      : () => {
                        this.chooseProduct(product);
                      }
                  }
                >
                  {
                    productList
                      ? 'delete'
                      : 'choose'
                  }
                </button>
              </React.Fragment>
            );
          })
        }
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
