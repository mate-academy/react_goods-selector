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

  addItem = (item: string) => {
    this.setState((state: State) => ({
      selectedGoods: [...state.selectedGoods, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((state: State) => ({
      selectedGoods: state.selectedGoods.filter(selectedItem => selectedItem !== item),
    }));
  };

  showChosenItems = () => {
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
          {this.showChosenItems()}
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              className="button button--top"
              onClick={this.removeSelections}
            >
              Remove all
            </button>
          )}
        </h1>
        <div>
          {goodsFromServer.map(item => {
            const isItemSelected = selectedGoods.includes(item);

            return (
            <div className="itemAndButton" key={item}>
              <li className={classNames('item', { itemSelected: isItemSelected })}>
                {item}
              </li>
              <button
                type="button"
                className="button"
                onClick={isItemSelected
                  ? () => { this.removeItem(item) }
                  : () => { this.addItem(item) }
                }
              >
                {isItemSelected ? `Remove` : `Add`}
              </button>
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
