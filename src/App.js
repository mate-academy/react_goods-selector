import React, { Component } from 'react';

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

export class App extends Component {
  state = {
    selectedGoods: [],
  };

  handleClick = (product) => {
    const addContent = () => {
      this.setState((prevState) => {
        const updateSelectedGoods = [...prevState.selectedGoods];

        updateSelectedGoods.push(product);

        return { selectedGoods: updateSelectedGoods };
      });
    };

    const removeContent = () => {
      this.setState((prevState) => {
        const updateSelectedGoods = [...prevState.selectedGoods]
          .filter(good => good !== product);

        return { selectedGoods: updateSelectedGoods };
      });
    };

    if (!this.state.selectedGoods.includes(product)) {
      addContent();
    } else {
      removeContent();
    }
  }

  clearGoodsCart = () => {
    this.setState({ selectedGoods: [] });
  };

  headerText = (goods) => {
    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return `${goods[0]} is selected `;
    }

    return goods.reduce((text, good, index, arr) => {
      if (index === arr.length - 1) {
        return `${text} and ${good} are selected `;
      }

      if (index !== 0 && index !== arr.length - 1) {
        return `${text}, ${good} `;
      }

      return `${text} ${good} `;
    }, '');
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="header">
            {this.headerText(this.state.selectedGoods)}
          </h1>
          {this.state.selectedGoods.length > 0
            && (
            <button
              type="button"
              onClick={this.clearGoodsCart}
            >
              X
            </button>
            )}
        </div>

        <ul>
          {goodsFromServer.map(goods => (
            <div key={goods}>
              <li>
                <span className={
                  this.state.selectedGoods.includes(goods)
                    ? 'mark'
                    : ''
                }
                >
                  {goods}
                </span>
                {` - `}
                <button
                  type="button"
                  onClick={() => this.handleClick(goods)}
                >
                  {this.state.selectedGoods.includes(goods)
                    ? 'Cancel'
                    : 'Select'
                  }
                </button>
              </li>
            </div>
          ))}
        </ul>

      </div>
    );
  }
}
