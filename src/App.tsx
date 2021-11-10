import React from 'react';
import classNames from 'classnames';
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

export interface State {
  selectedGoods: string[];
}

export class App extends React.Component {
  state: State = {
    selectedGoods: [],
  };

  add = (item: string) => {
    this.setState((state: State) => ({
      selectedGoods: [...state.selectedGoods, item],
    }));
  };

  remove = (item: string) => {
    this.setState((state: State) => ({
      selectedGoods: [...state.selectedGoods].filter(selectedItem => selectedItem !== item),
    }));
  };

  message = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods} selected`;
    }

    return `${(selectedGoods.slice(0, selectedGoods.length - 1)).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
  };

  removeSelections = () => {
    this.setState({ selectedGoods: [] });

    return 'No goods selected';
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="selectedItemsList">
          {this.message()}
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              className="button button--top"
              onClick={() => {
                this.removeSelections();
              }}
            >
              Remove all
            </button>
          )}
        </h1>
        <div>
          {goodsFromServer.map(item => (
            <div className="itemAndButton" key={item}>
              <li className={classNames('item', { itemSelected: selectedGoods.includes(item) })}>
                {item}
              </li>

              {selectedGoods.includes(item)
                ? (
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      this.remove(item);
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      this.add(item);
                    }}
                  >
                    Add
                  </button>
                )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
