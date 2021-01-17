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
    basket: [],
  }

  toSelect = ({ target }) => {
    target.parentElement.classList.add('selected');

    const targetName = goodsFromServer.find((good) => {
      const titleOfGood = target.parentElement.firstChild.textContent;

      return good === titleOfGood;
    });
    const prevStateOfBasket = this.state.basket;

    this.setState({ basket: [...prevStateOfBasket, targetName] });
  };

  toCancel = ({ target }) => {
    const titleOfGood = target.parentElement.firstChild.textContent;
    const index = this.state.basket.indexOf(titleOfGood);

    this.state.basket.splice(index, 1);
    const itemsOfBasket = this.state.basket;

    itemsOfBasket.splice(1, index);
    this.setState({ basket: [...itemsOfBasket] });

    if (!this.state.basket.includes(titleOfGood)) {
      target.parentElement.classList.remove('selected');
    }
  }

  toReset = () => {
    const goods = [...document.querySelectorAll('.good')];

    goods.map(good => good.classList.remove('selected'));
    this.setState({ basket: [] });
  }

  render() {
    return (
      <div className="App">
        <div className="basket">
          <button
            type="button"
            className="basket__button"
            onClick={this.toReset}
          >
            X
          </button>

          <h1>
            Basket:
            {this.state.basket.join(', ')}
          </h1>
        </div>

        <div className="goods">
          {goodsFromServer.map(good => (
            <div className="good">
              <p>{good}</p>
              <button
                className="button"
                type="button"
                onClick={this.toSelect}
              >
                Select
              </button>

              <button
                className="button"
                type="button"
                onClick={this.toCancel}
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
