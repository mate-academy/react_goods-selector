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

const icons = [
  '🥟',
  '🥕',
  '🥚',
  '🍦',
  '🍏',
  '🍞',
  '🍥',
  '🍯',
  '🧉',
  '🧄',
];

class App extends React.Component {
  state ={
    selectedGood: ['Jam'],
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">
          {selectedGood.length > 0
            ? (`${selectedGood} is selected`)
            : 'No goods are selected'
        }
          {this.state.selectedGood.length > 0
            && (
            <button
              className="removeAll-btn"
              type="button"
              onClick={() => {
                this.setState({
                  selectedGood: [],
                });
              }}
            >
              <span role="img" aria-label="removeAll">💣</span>
            </button>
            )}
        </h1>
        <ul className="list">
          {goodsFromServer.map((good, i) => (
            <li
              key={good}
              className={
                selectedGood.includes(good)
                  ? ' list__item active' : 'list__item'
              }
            >
              {good}
              {!selectedGood.includes(good) && (
                <button
                  type="button"
                  className="item__btn"
                  onClick={({ target }) => {
                    this.setState({ selectedGood: [good] });
                  }
                }
                >
                  {icons[i]}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
