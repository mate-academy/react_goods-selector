import React from 'react';
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
    selectedGood: '-',
  }

  select = (event) => {
    this.setState({
      selectedGood: event.target.textContent,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedGood}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.setState({
              selectedGood: '-',
            });
            const toClear = document.querySelector('.selected');

            if (toClear) {
              toClear.className = '';
            }
          }
          }
        >
          X
        </button>
        {goodsFromServer.map(good => (
          <button
            type="button"
            className={selectedGood === good ? `selected` : ''}
            onClick={this.select}
          >
            {good}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
