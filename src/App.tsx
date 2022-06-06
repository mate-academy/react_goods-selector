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

type State = {
  selectedGood: string[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: ['Jam'],
  };

  // methods for adding & removing elements from an array return array
  // filter,slice,map,concat

  goodsInCourt = (goods: string[] | []) => {
    const { selectedGood }: { selectedGood: string[] } = this.state;

    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return `${selectedGood[0]} is selected`;
    }

    return `${goods.slice(0, -1).join(',')} and ${goods[goods.length - 1]}`;
  };

  chooseProducts = (product: string) => {
    const { selectedGood }: { selectedGood: string[] } = this.state;

    if (selectedGood.includes(product)) {
      this.setState((state) => ({
        selectedGood: state.selectedGood.filter((prod: string) => (
          prod !== product
        )),
      }));
    } else {
      this.setState((state) => ({
        selectedGood: [...state.selectedGood, product],
      }));
    }
  };

  render() {
    const { selectedGood }: { selectedGood: string[] } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.goodsInCourt(selectedGood)}
        </h1>
        <button
          type="button"
          className="
          App__clear-button
          "
          onClick={() => {
            this.setState({
              selectedGood: [],
            });
          }}
        >
          Clear
        </button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <div className="list__inner">
              <li className="list__item">{good}</li>
              <button
                type="button"
                className="
                list__select-button
                "
                onClick={() => {
                  this.chooseProducts(good);
                }}
              >
                {selectedGood.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
