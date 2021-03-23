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
    selectedGood: 'Jam',
  }

  addProduct = (product) => {
    this.setState({ selectedGood: product });
  };

  removeProduct = () => {
    this.setState({ selectedGood: null });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected `}
                <button
                  type="button"
                  onClick={() => {
                    this.removeProduct();
                  }}
                >
                  X
                </button>
              </>
            )
            : `No goods selected`}
        </h1>

        <ul className="list">
          {goodsFromServer.map(product => (
            <li
              key={product}
              className={selectedGood === product ? 'selected' : 'item'}
            >
              {`${product} `}
              <button
                type="button"
                hidden={selectedGood === product}
                onClick={() => {
                  this.addProduct(product);
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
