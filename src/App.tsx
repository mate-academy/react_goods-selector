import classNames from 'classnames';
import React from 'react';
// import classNames from 'classnames';

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
  selectedGoods: string[]
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [],
  };

  addGood = (good: string) => {
    this.setState((state) => {
      return {
        selectedGoods: [...state.selectedGoods, good],
      };
    });
  };

  removeGood = (good: string) => {
    this.setState((state) => {
      return {
        selectedGoods: state.selectedGoods.filter(elem => elem !== good),
      };
    });
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  displaySelectedGoods() {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{this.displaySelectedGoods()}</h1>
        <ul className="list">
          {goodsFromServer.map(good => {
            const isGoodSelected = selectedGoods.find((elem => elem === good));

            return (
              <li
                className={classNames('list__item', {
                  'list__item--selected': isGoodSelected,
                })}
                key={good}
              >
                {good}

                <button
                  className={classNames('btn')}
                  type="button"
                  onClick={isGoodSelected
                    ? () => this.removeGood(good)
                    : () => this.addGood(good)}
                >
                  {isGoodSelected ? 'Remove' : 'Add'}
                </button>
              </li>
            );
          })}
        </ul>
        {!!selectedGoods.length && (
          <button
            className="btn"
            type="button"
            onClick={this.clearGoods}
          >
            Clear Selected Goods
          </button>
        )}
      </div>
    );
  }
}
