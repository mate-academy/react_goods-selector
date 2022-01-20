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
  'Jam',
  'Honey',
  'Garlic',
];

class App extends React.Component<Props, {}> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood}
          { ' ' }
          is selected
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <span className={classNames(
                'good',
                {
                  selectedGood: selectedGood === good,
                },
              )}
              >
                {good}
              </span>
              <button
                type="button"
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
                className={classNames({
                  buttonVisible: selectedGood === good,
                })}
              >
                Select
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={classNames({
            buttonVisible: selectedGood === 'No goods',
          })}
          onClick={() => {
            this.setState({ selectedGood: 'No goods' });
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
