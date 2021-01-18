import React from 'react';
import './App.scss';
import { Product } from './components/Product';

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
    const goodsList = document.querySelector('.goods');

    [...goodsList.children].forEach((good) => {
      good.classList.remove('active');
    });

    this.setState({ selected: [] });
  }

  add = ({ target }) => {
    const listTarget = target.closest('li');
    const newGood = listTarget.firstChild.textContent;

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
      <div className="app">
        <div className="app__header">
          <h1>
            Selected goods:
          </h1>

          <Product goods={this.state.selected} />

          <button
            onClick={this.clear}
            className={this.state.selected.length === 0
              ? 'app__button app__button-hidden'
              : 'app__button'}
            type="button"
          >
            Remove all
          </button>
        </div>

        <ul className="goods">
          {goodsFromServer.map(good => (
            <li key={good} className="goods__item">
              {good}

              <button
                onClick={this.add}
                className="goods__button"
                type="button"
              >
                Add / Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
