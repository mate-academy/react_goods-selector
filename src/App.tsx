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

type State = {
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  setTitle() {
    switch (this.state.selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${this.state.selectedGoods} is selected`;
      default:
        return `${this.state.selectedGoods.slice(0, -1).join(', ')} and ${this.state.selectedGoods.slice(-1)} are selected`;
    }
  }

  addGood = (good: string) => {
    this.setState(state => ({
      selectedGoods: [
        ...state.selectedGoods,
        good,
      ],
    }));
  };

  removeGood = (good: string) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods
        .filter(selectedGood => selectedGood !== good),
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    const isGoodSelected = (good: string): boolean => {
      return selectedGoods.includes(good);
    };

    return (
      <div className="goods">
        <h1
          className="subtitle has-text-centered is-size-3 mt-3"
        >
          { this.setTitle() }
        </h1>
        <div className="list box">
          {goodsFromServer.map(good => (
            <div
              key={good}
              className={classNames(
                'item',
                {
                  'has-background-grey-lighter': !isGoodSelected(good),
                  'has-background-success': isGoodSelected(good),
                },
              )}
            >
              <div>
                {good.toLocaleUpperCase()}
              </div>

              <button
                type="button"
                className={classNames(
                  'button',
                  'is-focused',
                  {
                    'is-danger': isGoodSelected(good),
                  },
                )}
                onClick={() => {
                  if (!isGoodSelected(good)) {
                    this.addGood(good);
                  }

                  if (isGoodSelected(good)) {
                    this.removeGood(good);
                  }
                }}
              >
                {!selectedGoods.includes(good)
                  ? 'CLICK TO SELECT'
                  : 'CLICK TO REMOVE'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
