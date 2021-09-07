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
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  cancelSelect = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
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
              onClick={this.cancelSelect}
            >
              Clear items
            </button>
          </>
        )}

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'App__item',
                {
                  'App__item--selected': selectedGood === good,
                },
              )}
            >
              {good}
              {selectedGood === good || (
                <button
                  type="button"
                  className="App__button"
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
