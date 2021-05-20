import React from 'react';
import classNames from 'classnames';

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
  };

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  renderTitle = (array) => {
    switch (array.length) {
      case 0:
        return (
          'No goods selected'
        );

      case 1:
        return (
          `${array[0]} is selected`
        );

      default:
        return (
          `${array.slice(0, -1).join(', ')} 
          and ${array[array.length - 1]} 
          are selected`
        );
    }
  };

  addProduct(product) {
    this.setState((prevState) => {
      prevState.selectedGoods.push(product);

      return {
        selectedGoods: prevState.selectedGoods,
      };
    });
  }

  removeProduct(product) {
    this.setState(prevState => (
      {
        selectedGoods: prevState.selectedGoods.filter(
          element => element !== product,
        ),
      }
    ));
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          <>
            {this.renderTitle(selectedGoods)}

            {selectedGoods.length > 0 && (
              <button
                type="button"
                className="title__clear"
                title="Clear selected"
                onClick={this.clearSelected}
              >
                x
              </button>
            )}
          </>
        </h1>

        <ul className="product-list">
          {goodsFromServer.map(product => (
            <li key={product} className="product-list__item">
              <span
                className={classNames({
                  hightlighted: selectedGoods.includes(product),
                })}
              >
                {product}
              </span>

              <button
                className={
                  classNames('product-list__add', {
                    hidden: selectedGoods.includes(product),
                  })
                }
                type="button"
                onClick={this.addProduct.bind(this, product)}
              >
                Add
              </button>

              <button
                className={
                  classNames({
                    hidden: !selectedGoods.includes(product),
                    'product-list__remove': true,
                  })
                }
                type="button"
                onClick={this.removeProduct.bind(this, product)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
