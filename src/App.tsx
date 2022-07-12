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

class App extends React.Component {
  state = {
    selectedGood: ['Jam'],
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {!selectedGood.length
            ? 'No goods selected'
            : `${selectedGood}
            ${' '}
            is selected`}
          {selectedGood.length
            ? (
              <button
                type="button"
                onClick={() => (
                  this.setState({ selectedGood: [] })
                )}
              >
                Clear
              </button>
            )
            : null}
        </h1>
        <ul>
          {goodsFromServer.map((good: string) => (
            <li
              key={good}
              className={`${selectedGood.includes(good)
                ? 'selectedGood'
                : ''
              }`}
            >
              {good}
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    selectedGood: selectedGood.includes(good)
                      ? selectedGood.filter((select: string) => select !== good)
                      : [...selectedGood, good],
                  });
                }}
              >
                {selectedGood.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
