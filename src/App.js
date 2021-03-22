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

let isResetted = false;

class App extends React.Component {
  state = {
    selectedGood: ['Jam'],
  };

  selectGood = ({ name }) => {
    this.setState(state => ({
      selectedGood: [...state.selectedGood, name],
    }));

    isResetted = false;
  }

  resetSelection = () => {
    this.setState(state => ({
      selectedGood: [],
    }));

    isResetted = true;
  }

  render() {
    const { selectedGood } = this.state;

    const products = createTitle(selectedGood, selectedGood.length, isResetted);

    return (
      <div>
        <h1 className="title">
          {products.length
            ? products
            : 'No goods selected'
          }
        </h1>
        <button
          type="button"
          className={
            selectedGood.length
              ? ''
              : 'disabled'
          }
          onClick={this.resetSelection}
        >
          X
        </button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good.id}
              className={
                selectedGood && selectedGood.includes(good.name)
                  ? 'selected'
                  : ''
              }
            >
              {good.name}
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.selectGood(good);
                }}
                className={
                  selectedGood && selectedGood.includes(good.name)
                    ? 'disabled'
                    : ''
                }
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

function createTitle(product, amountOfProducts, flagOfResetting) {
  const singleProduct = (amountOfProducts === 1);
  let someProducts;

  if (product && !flagOfResetting) {
    someProducts = singleProduct
      ? `${product} is selected`
      : `${product.join(', ')} are selected`;
  } else {
    someProducts = [];
  }

  return someProducts;
}

export default App;
