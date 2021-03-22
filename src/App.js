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
    previousButton: null,
  }

  addProduct = (product) => {
    this.setState({ selectedGood: product });
  };

  removeProduct = () => {
    this.setState({ selectedGood: null });
  };

  render() {
    const { selectedGood, previousButton } = this.state;

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

                    if (previousButton) {
                      previousButton.hidden = false;
                    }
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
                onClick={(event) => {
                  this.addProduct(product);

                  const pressedButton = event.target;

                  pressedButton.hidden = true;

                  if (previousButton) {
                    previousButton.hidden = false;
                  }

                  this.setState({ previousButton: event.target });
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
