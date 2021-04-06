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

  addGoods = (goods) => {
    // eslint-disable-next-line
    const { selectedGoods } = this.state;

    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, goods],
    }));
  }

  clearSelectedGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  removeGoods = (goods) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter(product => product !== goods),
    });
  }

  selectedList = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')}`
    + ` and ${selectedGoods.slice(-1)} are selected`;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">

        <ul className="app__products">
          { goodsFromServer.map(product => (
            <li key={product} className="app__products-item">
              <h1 className={
                classNames('app__product', {
                  app__product_selected: selectedGoods.includes(product),
                })
              }
              >
                {product}
              </h1>
              <div className="app__buttons">
                <button
                  className="app__button app__button-add"
                  type="button"
                  onClick={() => {
                    this.addGoods(product);
                  }}
                >
                  Add
                </button>
                <button
                  className="app__button app__button-remove"
                  type="button"
                  onClick={() => {
                    this.removeGoods(product);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="app__products-info">
          <strong className="app__clear">Clear all:</strong>
          {selectedGoods.length > 0 && (
          <button
            className="app__button app__button-clear"
            onClick={this.clearSelectedGoods}
            type="button"
          >
            X
          </button>
          )}
          <h1 className="app__products-text">
            Selected goods:
            {' '}
            {this.selectedList()}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
