import React from 'react';
import './App.scss';
import { v4 as uniqueKey } from 'uuid';

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
    selectedGood: '',
  }

  clearSelection = () => {
    this.setState({
      selectedGood: null,
    });
  }

  goNext = (event, product) => {
    this.setState({
      selectedGood: product,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>
            {this.state.selectedGood
              ? `${this.state.selectedGood} is selected`
              : 'No goods selected'
            }
          </h1>
          <button
            type="button"
            className={this.state.selectedGood ? 'btn' : 'hide'}
            onClick={this.clearSelection}
          >
            X
          </button>
        </div>
        <ul className="product">
          {goodsFromServer.map((product) => {
            const key = uniqueKey();
            const isSelected = this.state.selectedGood === product;

            return (
              <li
                key={key}
                className={
                  isSelected
                    ? 'product__item hightlighted'
                    : 'product__item'
                }
              >
                {product}
                <button
                  type="button"
                  className={isSelected ? 'hide' : 'product__btn'}
                  onClick={event => this.goNext(event, product)}
                >
                  Select
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
