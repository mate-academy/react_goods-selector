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

  arr = this.state.selectedGood;

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

  textMaker = (arr: string[]) => {
    if (arr.length === 1) {
      return ` ${arr[0]} is selected.`;
    }

    if (arr.length === 2) {
      return `${arr[0]} and ${arr[1]} are selected.`;
    }

    if (arr.length > 2) {
      let str = arr[0];

      for (let i = 1; i < arr.length - 1; i += 1) {
        str += `, ${arr[i]}`;
      }

      return `${str} and ${arr[arr.length - 1]} are selected.`;
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
              <li key={good} className="App__good-box">
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
