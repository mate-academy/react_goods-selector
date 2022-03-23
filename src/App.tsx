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

  clickHandler = (message: string) => {
    this.setState({ selectedGood: message });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: ${selectedGood ? `${selectedGood} is selected` : 'No goods selected'}`}

          {selectedGood && (
            <button
              type="button"
              className={classNames(
                'clear-button',
              )}
              onClick={() => {
                this.clickHandler('');
              }}
            >
              X
            </button>
          )}
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
                  this.clickHandler(good);
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
