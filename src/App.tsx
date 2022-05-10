import React from 'react';
import './App.scss';

import classNames from 'classnames';

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

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    selectedGood: ['Jam'],
  };

  goodsArr = this.state.selectedGood;

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((state: State) => {
      state.selectedGood.splice(state.selectedGood.indexOf(good), 1);

      return { selectedGood: state.selectedGood };
    });
  };

  cleanBin = () => this.setState({ selectedGood: [] });

  textMaker = (goodsArr: string[]) => {
    if (goodsArr.length === 1) {
      return ` ${goodsArr[0]} is selected.`;
    }

    if (goodsArr.length === 2) {
      return `${goodsArr[0]} and ${goodsArr[1]} are selected.`;
    }

    if (goodsArr.length > 2) {
      let str = goodsArr[0];

      for (let i = 1; i < goodsArr.length - 1; i += 1) {
        str += `, ${goodsArr[i]}`;
      }

      return `${str} and ${goodsArr[goodsArr.length - 1]} are selected.`;
    }

    return 'No goods selected.';
  };

  render() {
    return (
      <div className="App">
        <div className="App__bin">
          <h1>
            {this.textMaker(this.state.selectedGood)}
          </h1>
          {this.state.selectedGood.length > 0
          && (
            <button
              type="button"
              className="App__cleanBin"
              onClick={() => this.cleanBin()}
            >
              Clean Bin
            </button>
          )}
        </div>
        <ul className="App__list">
          {goodsFromServer.map(good => {
            return (
              <li key={good} className="App__goodBox">
                <span>{good}</span>
                <button
                  onClick={
                    this.state.selectedGood.includes(good)
                      ? () => this.removeGood(good)
                      : () => this.addGood(good)
                  }
                  type="button"
                  className={classNames('App__button', {
                    App__removeButton: this.state.selectedGood.includes(good),
                  })}
                >
                  {this.state.selectedGood.includes(good)
                    ? 'Remove'
                    : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
