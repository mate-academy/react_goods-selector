import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>{`Selected good: ${this.state.selectedGood}`}</h1>
        <div className="products">
          {goodsFromServer.map(elem => (
            <button
              key={elem}
              type="button"
              className={classNames({
                products__product: true,
                products__product_active: elem === selectedGood,
              })}
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
          x
        </button>
      </div>
    );
  }
}

export default App;
