import classNames from 'classnames';
import React from 'react';
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
  selectedGood: string
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  clearSelect = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood
            ? `${selectedGood} selected`
            : 'No goods selected'}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.clearSelect();
          }}
          className={classNames(
            {
              hidden: selectedGood === '',
            },
          )}
        >
          Clear
        </button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                {
                  selected: selectedGood === good,
                },
              )}
            >
              {good}
              <button
                type="button"
                onClick={() => {
                  this.selectGood(good);
                }}
                className={classNames(
                  {
                    hidden: selectedGood === good,
                  },
                )}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
