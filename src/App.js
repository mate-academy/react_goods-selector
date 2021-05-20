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
  }

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
          `${array.join(', ')} are selected`
        );
    }
  }

  render() {
    let { selectedGoods: curentProductList } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          <>
            {this.renderTitle(curentProductList)}

            {curentProductList.length > 0 && (
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
                  hightlighted: curentProductList.includes(product),
                })}
              >
                {product}
              </span>

              <button
                className={
                  classNames({
                    hidden: curentProductList.includes(product),
                    'product-list__add': true,
                  })
                }
                type="button"
                onClick={() => {
                  curentProductList.push(product);
                  this.setState({ selectedGoods: curentProductList });
                }}
              >
                Add
              </button>

              <button
                className={
                  classNames({
                    hidden: !curentProductList.includes(product),
                    'product-list__remove': true,
                  })
                }
                type="button"
                onClick={() => {
                  curentProductList = curentProductList.filter(
                    element => element !== product,
                  );
                  this.setState({ selectedGoods: curentProductList });
                }}
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
