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

type Props = {};

interface State {
  selectedGood: string[]
}

export class App extends React.Component<Props, State> {
  state: State = {
    selectedGood: [],
  };

  addProduct = (word: string) => {
    const { selectedGood } = this.state;

    this.setState({ selectedGood: [...selectedGood, word] });
  };

  removeAllProduct = () => {
    this.setState({ selectedGood: [] });
  };

  addList = () => {
    const { selectedGood } = this.state;

    switch (selectedGood.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return selectedGood[0];
      default:
        return `${selectedGood.slice(0, -1).join(', ')} and ${selectedGood[selectedGood.length - 1]}`;
    }
  };

  removeGood = (product: string) => {
    const { selectedGood } = this.state;

    this.setState({ selectedGood: selectedGood.filter(good => good !== product) });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {this.addList()}
        </h1>

        <button
          type="button"
          className={selectedGood.length === 0 ? 'active' : 'goods__button'}
          onClick={this.removeAllProduct}
        >
          Remove Goods
        </button>

        <ul className="goods">
          {goodsFromServer.map(goods => (
            <li className="goods__item" key={goods}>
              {goods}
              <br />
              {selectedGood.includes(goods)
                ? (
                  <button
                    type="button"
                    className="goods__button"
                    onClick={() => this.removeGood(goods)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="goods__button"
                    onClick={() => this.addProduct(goods)}
                  >
                    Buy
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
