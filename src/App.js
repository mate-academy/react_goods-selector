import React from 'react';
import './App.scss';
import { Product } from './components/Product';

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

const goodsItems = goodsFromServer.map((good, index) => ({
  id: index,
  name: good,
}));

class App extends React.Component {
  state = {
    selectedGood: [],
  };

  getProduct = (event) => {
    this.setState({ selectedGood: [event.target.textContent] });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <div className="header">
          <h1 className="heading">
            {`Selected good: ${selectedGood}`}
          </h1>

          <button
            className="clear-button"
            type="button"
            onClick={() => {
              this.setState({ selectedGood: [] });
            }}
          >
            X
          </button>
        </div>
        <ul className="list">
          {goodsItems.map(good => (
            <li key={good.id} className="list__item">
              <Product
                selectedGoods={selectedGood}
                onClick={this.getProduct}
                good={good}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
