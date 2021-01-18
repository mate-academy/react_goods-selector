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
    goods: goodsFromServer,
    selectedGood: 'none',
  }

  addGood = (event) => {
    const found = event.target.closest('.list');

    const prev = document.querySelector('.selected');

    if (prev) {
      prev.classList.remove('selected');
    }

    found.classList.add('selected');
    this.setState({ selectedGood: found.innerText.slice(0, -6) });
  }

  removeGood = (event) => {
    const found = document.querySelector('.selected');

    found.classList.remove('selected');
    this.setState({ selectedGood: 'none' });
  }

  render() {
    const { goods, selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedGood}
          {(selectedGood !== 'none') && (
            <button
              type="button"
              onClick={this.removeGood}
            >
              X
            </button>
          )}
        </h1>

        <ul>
          {goods.map(good => (
            <>
              <li key={good} className="list">
                {good}
                <button
                  type="button"
                  onClick={this.addGood}
                >
                  Select
                </button>
              </li>
            </>
          ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
