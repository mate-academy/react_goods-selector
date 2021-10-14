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

interface State {
  selectedGood: string | null,
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  currentClass(good: string) {
    if (good === this.state.selectedGood) {
      return 'good__item active';
    }

    return 'good__item';
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={() => this.setState({ selectedGood: '' })}
        >
          X
        </button>

        <h1>
          Selected good:
          {' '}
          {selectedGood
            ? (`${selectedGood}`)
            : 'No goods selected'}
        </h1>
        <ul>
          {goodsFromServer.map((good) => (
            <li className={this.currentClass(good)}>
              {good}
              <button
                type="button"
                disabled={good === selectedGood}
                onClick={() => this.setState({ selectedGood: good })}
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
