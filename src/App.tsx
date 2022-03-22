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

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: ${selectedGood ? `${selectedGood} is selected` : 'No goods selected'}`}

          <button
            type="button"
            className={classNames(
              'clear-button',
              { hidden: selectedGood === '' },
            )}
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            X
          </button>
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                { selected: good === selectedGood },
              )}
            >
              {good}

              <button
                type="button"
                className={classNames(
                  'item-button',
                  { hidden: good === selectedGood },
                )}
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
