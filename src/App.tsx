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
      // const index = selectedGood.indexOf(product);

      // ARRAY WITHOUT REMOVED ELEMENT

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
        <h1>{this.goodsInCourt(selectedGood)}</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              selectedGood: [],
            });
          }}
        >
          Clear
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <>
              <li>{good}</li>
              <button
                type="button"
                onClick={() => {
                  this.chooseProducts(good);
                }}
              >
                {selectedGood.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
