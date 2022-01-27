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

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood}
          { ' ' }
          selected
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
                  this.selectGood(good);
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
            this.selectGood('No goods');
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
