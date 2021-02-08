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
    selectedGood: '',
  }

  render() {
    const { goods, selectedGood } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>
            Selected good: -
            {' '}
            {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          </h1>
          {selectedGood
            && (
              <button
                type="button"
                onClick={() => {
                  this.setState({ selectedGood: null });
                }}
              >
                X
              </button>
            )
          }
        </div>
        <ul>
          {goods.map(product => (
            <li
              key={product}
              className={
                (product === selectedGood)
                  ? 'selected'
                  : 'notSelected'
              }
            >
              {product}
              <button
                id={product}
                type="submit"
                className={
                  (product === selectedGood)
                    ? 'hover'
                    : 'block'
                }
                onClick={() => {
                  this.setState({ selectedGood: product });
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
