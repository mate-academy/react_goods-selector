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
].map((name, index) => ({
  name,
  id: index + 1,
}));

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  }

  addGoods = (good) => {
    this.setState({ selectedGood: good.name });
  }

  removeGoods = () => {
    this.setState({ selectedGood: 'No goods selected' });
  }

  render() {
    return (
      <div className="App">
        <h1>
          <button
            type="button"
            onClick={this.removeGoods}
            className={
              this.state.selectedGood
              === 'No goods selected' ? 'hiddenButton' : ''
            }
          >
            X
          </button>
          {` Selected good: ${this.state.selectedGood}`}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good.id}
              className="list"
            >
              <span
                className={
                good.name === this.state.selectedGood ? 'selectedGood' : ''
                }
              >
                {good.name}
              </span>
              {' '}
              <button
                type="button"
                className={
                  good.name === this.state.selectedGood ? 'hiddenButton' : ''
                }
                onClick={() => {
                  this.addGoods(good);
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
