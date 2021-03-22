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
    selectedGood: goodsFromServer[8],
  };

  selectGood = (product) => {
    this.setState({ selectedGood: product });
  }

  removeSelected =() => {
    this.setState({ selectedGood: null });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        </h1>
        {
          selectedGood
            ? (
              <button
                type="button"
                onClick={this.removeSelected}
              >
                X
              </button>
            )
            : ''
        }
        <ul className="goods">
          {
            goodsFromServer.map(product => (
              <li
                // eslint-disable-next-line max-len
                className={`goods__item  ${selectedGood === product ? 'active' : ''}`}
                key={product}
              >
                {product}
                {
                  selectedGood !== product
                    ? (
                      <button
                        type="button"
                        onClick={() => this.selectGood(product)}
                      >
                        Select
                      </button>
                    )
                    : ''
                }
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
