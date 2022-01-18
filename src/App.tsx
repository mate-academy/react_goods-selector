import React from 'react';
// import classNames from 'classnames';
// import { isPropertySignature } from 'typescript';
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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState(state => {
      const index = state.selectedGoods.indexOf(good);

      state.selectedGoods.splice(index, 1);

      return {
        selectedGoods: state.selectedGoods,
      };
    });
  };

  clearGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  showSelectedGoods = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')}`
    + ` and ${selectedGoods[selectedGoods.length - 1]} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.showSelectedGoods()}
        </h1>
        {selectedGoods.length > 0 && (
          <>
            Clear selection
            <button
              type="button"
              onClick={this.clearGoods}
              className="button__clear"
            >
              X
            </button>
          </>
        )}

        <br />
        <br />
        Goods:
        <br />
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={`list__item ${selectedGoods.includes(good)
                ? 'list__item--selected'
                : ''
              }`}
            >
              {good}
              {'   '}
              {selectedGoods.includes(good)
                ? (
                  <button type="button" onClick={() => this.removeGood(good)}>
                    Remove
                  </button>
                )
                : (
                  <button type="button" onClick={() => this.addGood(good)}>
                    Add
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
