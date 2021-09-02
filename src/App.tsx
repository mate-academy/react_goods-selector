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
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.state.selectedGood = good;
    this.setState({ selectedGood: good });
  };

  unselectAll = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {!selectedGood ? (
          <h1 className="App__title">
            No goods selected
          </h1>
        ) : (
          <>
            <h1 className="App__title">
              {`${selectedGood} is selected`}
            </h1>
            <button
              type="button"
              className="App__button--unselect"
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
              className={classNames('App__item', {
                'App__item--selected': selectedGood === good,
              })}
            >
              {good}
              {selectedGood === good || (
                <button
                  type="button"
                  className="App__button--select"
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
