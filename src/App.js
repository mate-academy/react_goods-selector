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
    selectedGood: '-',
  };

  handleClick = (event) => {
    this.setState({
      selectedGood: event.target.textContent,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{`Selected good: ${this.state.selectedGood}`}</h1>
        <div className="products">
          {goodsFromServer.map(elem => (
            <button
              key={`${elem}${Math.random()}`}
              type="button"
              className={elem === this.state.selectedGood
                ? 'products__product products__product--active'
                : 'products__product'
              }
              onClick={this.handleClick}
            >
              {elem}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="product-clear"
          onClick={() => this.setState({
            selectedGood: '-',
          })}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
