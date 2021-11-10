import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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
    selectedGood: [],
  };

  changeTextProduct = (word: string) => {
    const { selectedGood } = this.state;

    this.setState({ selectedGood: [...selectedGood, word] });
  };

  removeTextProduct = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedGood.length === 0 ? 'No goods selected' : ''}
          {selectedGood.length > 1
            ? `${selectedGood.slice(0, -1).join(', ')} and ${selectedGood[selectedGood.length - 1]}`
            : selectedGood}
        </h1>
        <button
          type="button"
          className={selectedGood.length === 0 ? 'active' : 'goods__button'}
          onClick={this.removeTextProduct}
        >
          remove
        </button>
        <ul className="goods">
          {goodsFromServer.map(goods => (
            <li className="goods__item" key={goods}>
              {goods}
              <br />
              <button
                type="button"
                className={selectedGood.find(a => a === goods) ? 'goods__button' : ''}
                onClick={() => this.changeTextProduct(goods)}
              >
                buy
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
