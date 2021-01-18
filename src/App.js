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

  toToggle = ({ target }) => {
    const { basket } = this.state;
    const titleOfGood = target.parentElement.firstChild.textContent;

    target.parentElement.classList.toggle('selected');

    basket.includes(titleOfGood)
      ? this.toCancel(titleOfGood)
      : this.toSelect(titleOfGood);
  }

  toSelect = (title) => {
    const { basket } = this.state;

    this.setState({ basket: [...basket, title] });
  };

  toCancel = (title) => {
    const { basket } = this.state;
    const index = basket.indexOf(title);
    const itemsOfBasket = basket;

    itemsOfBasket.splice(index, 1);
    this.setState({ basket: [...itemsOfBasket] });
  }

  toReset = () => {
    const goods = [...document.querySelectorAll('.good')];

    goods.forEach((good) => {
      const button = good.querySelector('button');

      good.classList.remove('selected');
      button.innerText = 'Add';
    });
    this.setState({ basket: [] });
  }

  render() {
    const { basket } = this.state;

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
            <div key={good} className="good">
              <p>{good}</p>
              <button
                className="button"
                type="button"
                onClick={this.toToggle}
              >
                {basket.includes(good) ? 'Remove' : 'Add'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
