import React from 'react';
import classnames from 'classnames';
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
  state = {
    selectedGoods: ['Jam'],
  };

  clearSelection = () => this.setState({ selectedGoods: [] });

  addGood = (good: string) => {
    this.setState((element) => {
      return {
        selectedGoods: [...element.selectedGoods, good],
      };
    });
  };

  removeGood = (good: string) => {
    this.setState((element) => {
      return {
        selectedGoods: element.selectedGoods
          .filter(item => good !== item),
      };
    });
  };

  formatTitle = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return '';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        {selectedGoods.length
          ? (
            <button
              type="button"
              onClick={this.clearSelection}
              className="button__cleaner"
            >
              ❌
            </button>
          )
          : ' '}
        <ul className="App__list">
          {
            goodsFromServer.map(
              good => {
                const isGoodSelected: boolean = selectedGoods.includes(good);

                const buttonToRender = (
                  <button
                    className={classnames(
                      { button: true },
                      { button__active: isGoodSelected },
                    )}
                    onClick={isGoodSelected
                      ? () => this.removeGood(good)
                      : () => this.addGood(good)}
                    type="button"
                  >
                    {isGoodSelected
                      ? 'Remove good ❌'
                      : 'Add good ✅'}
                  </button>
                );

                return (
                  <li
                    className={classnames(
                      { 'App__list--element': true },
                      { active: isGoodSelected },
                    )}
                    key={good}
                  >
                    <div className="App__list--good">{good}</div>
                    {' '}
                    {buttonToRender}
                  </li>
                );
              },

            )
          }
        </ul>
        <h1 className="App__title">
          {this.formatTitle()}
        </h1>
      </div>
    );
  }
}
