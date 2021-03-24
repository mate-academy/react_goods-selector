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

export class App extends React.Component {
  state = {
    goodsInCart: [],
  };

  handleClick = (clickEvent) => {
    const button = clickEvent.target;

    const addContent = () => {
      const good = clickEvent.target.previousElementSibling.textContent;

      this.setState((prevState) => {
        const updateGoodsInCart = [...prevState.goodsInCart];

        updateGoodsInCart.push(good);

        return { goodsInCart: updateGoodsInCart };
      });
    };

    const removeContent = () => {
      const toDelete = clickEvent.target
        .previousElementSibling.textContent;

      this.setState((prevState) => {
        const updateGoodsInCart = [...prevState.goodsInCart]
          .filter(good => good !== toDelete);

        return { goodsInCart: updateGoodsInCart };
      });
    };

    if (button.textContent === 'Select') {
      addContent();
    } else {
      removeContent();
    }
  }

  clearGoodsCart = () => {
    this.setState({ goodsInCart: [] });
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
            {this.headerText(this.state.goodsInCart)}
          </h1>
          {this.state.goodsInCart.length > 0
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
                  this.state.goodsInCart.includes(goods)
                    ? 'mark'
                    : ''
                }
                >
                  {goods}
                </span>
                {` - `}
                <button
                  type="button"
                  onClick={this.handleClick}
                >
                  {this.state.goodsInCart.includes(goods)
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
