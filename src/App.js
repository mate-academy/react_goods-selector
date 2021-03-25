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
].map((good, index) => ({
  product: good,
  id: index + 1,
}));

let isResetted = false;

class App extends React.Component {
  state = {
    selectedGood: ['Jam'],
  }

  addGoods = (good) => {
    this.setState(prevState => ({
      selectedGood: [...prevState.selectedGood, good],
    }));

    isResetted = false;
  }

  resetGoods = () => {
    this.setState(() => ({
      selectedGood: [],
    }));

    isResetted = true;
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {isResetted
            ? 'No goods selected'
            : `${selectedGood.join(', ')} is selected`
          }
        </h1>
        {isResetted || (
          <button
            type="button"
            onClick={this.resetGoods}
          >
            X
          </button>
        )}
        <ul>
          {goodsFromServer.map(({ product, id }) => (
            <li
              key={id}
              className={`item ${selectedGood.includes(product)
                ? 'item--selected'
                : ''}`
              }
            >
              {product}
              {' '}
              {selectedGood.includes(product) || (
                <button
                  type="button"
                  onClick={() => {
                    this.addGoods(product);
                  }}
                >
                  Select
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
