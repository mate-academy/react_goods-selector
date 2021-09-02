import React, { Props } from 'react';
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
  selectedGood: string | null;
};

// update to allow selecting multiple items

class App extends React.Component<Props<State>, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.state.selectedGood = good;
    this.setState({ selectedGood: good });
  };

  unselectAll = () => {
    this.state.selectedGood = null;
    this.setState({ selectedGood: null });
  };

  render() {
    return (
      <div className="App">
        {!this.state.selectedGood ? (
          <h1 className="App__title">
            No goods selected
          </h1>
        ) : (
          <>
            <h1 className="App__title">
              {`${this.state.selectedGood} is selected`}
            </h1>
            <button
              type="button"
              className="App__unselect-button"
              onClick={this.unselectAll}
            >
              X
            </button>
          </>
        )}
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames('App__list', {
                'App__list--selected': this.state.selectedGood === good,
              })}
            >
              {good}
              {this.state.selectedGood === good || (
                <button
                  type="button"
                  className="App__select-button"
                  onClick={() => {
                    this.selectGood(good);
                  }}
                >
                  Select
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
