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

interface State {
  selectedGoods: string[];
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((state) => {
      return {
        selectedGoods: state.selectedGoods.filter(el => el !== good),
      };
    });
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  displayGoods = () => {
    const { selectedGoods } = this.state;
    const displayAllExceptLastElement = (array: string[]) => [...array].splice(0, array.length - 1).join(', ');
    const displayLastElement = (array: string[]) => array[array.length - 1];

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${displayAllExceptLastElement(selectedGoods)} and ${displayLastElement(selectedGoods)} are selected`;
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="toppic">{ this.displayGoods() }</h1>
        <ul className="list">
          {goodsFromServer.map(good => {
            const isSelected = this.state.selectedGoods.includes(good);

            return (
              <li
                className={classNames(
                  'list__item', {
                    'list__item--selected': isSelected,
                  },
                )}
                key={good}
              >
                {good}
                <button
                  className="list__button"
                  type="button"
                  onClick={isSelected
                    ? () => this.removeGood(good)
                    : () => this.addGood(good)}
                >
                  {isSelected ? 'Remove' : 'Add'}
                </button>
              </li>
            );
          })}
        </ul>
        {!!this.state.selectedGoods.length && (
          <button
            className="clear-button"
            type="button"
            onClick={this.clearGoods}
          >
            Clear the selection
          </button>
        )}
      </div>
    );
  }
}
