import React from 'react';
import './App.scss';

import { Product } from './components/Product/Product';

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
    selected: [],
  }

  clear = () => {
    const goodsList = document.querySelector('.goods__list');

    [...goodsList.children].forEach((good) => {
      good.classList.remove('active');
    });

    this.setState({ selected: [] });
  }

  add = ({ target }) => {
    const listTarget = target.closest('li');
    const newGood = listTarget.textContent.slice(0, -1);

    listTarget.classList.toggle('active');

    if (listTarget.classList.contains('active')) {
      this.setState(state => (
        { selected: [...state.selected, newGood] }
      ));

      return;
    }

    this.setState(state => (
      { selected: [...state.selected].filter(good => good !== newGood) }
    ));
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected goods:
          {' '}
          <Product goods={this.state.selected} />
        </h1>

        <button
          onClick={this.clear}
          className="button goods__button"
          type="button"
        >
          +
        </button>

        <ul className="goods__list">
          {goodsFromServer.map(good => (
            <li key={good} className="goods__item">
              {good}
              <button
                onClick={this.add}
                className="button goods__item-button"
                type="button"
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
