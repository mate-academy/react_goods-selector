import React from 'react';
import classNames from 'classnames';
import './App.scss';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    selectedGood: null,
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="header">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        </h1>

        <button
          type="button"
          className={classNames('button', { hidden: !selectedGood })}
          onClick={() => {
            this.setState({ selectedGood: null });
          }}
        >
          X
        </button>

        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <span
                className={
                  classNames('good-name', { selected: selectedGood === good })
                }
              >
                {good}
              </span>
              <button
                type="button"
                className={
                  classNames('button', { hidden: selectedGood === good })
                }
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
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
