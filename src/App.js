import React from 'react';
import './App.scss';
import { Product } from './components/Product';

export const goodsFromServer = [
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
    this.setState({ selected: [] });
  }

  add = (good) => {
    if (this.state.selected.includes(good)) {
      const prevSelected = [...this.state.selected];
      const goodIndex = prevSelected.findIndex(element => (
        element === good
      ));

      prevSelected.splice(goodIndex, 1);

      this.setState(() => ({ selected: prevSelected }));
    } else {
      this.setState(prevState => ({
        selected: [...prevState.selected, good],
      }));
    }
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
                onClick={() => this.add(good)}
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
