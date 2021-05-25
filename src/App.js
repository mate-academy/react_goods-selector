import React from 'react';
import './App.scss';
import { v4 as uniqueKey } from 'uuid';
import classnames from 'classnames';

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
    selectedGood: null,
  }

  clearSelection = () => {
    this.setState({
      selectedGood: null,
    });
  }

  goNext = (product) => {
    this.setState({
      selectedGood: product,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="title">
          <h1>
            {selectedGood
              ? `${selectedGood} is selected`
              : 'No goods selected'
            }
          </h1>
          <button
            type="button"
            className={classnames({
              btn: selectedGood,
              hide: !selectedGood,
            })}
            onClick={this.clearSelection}
          >
            X
          </button>
        </div>
        <ul className="product">
          {goodsFromServer.map((product) => {
            const key = uniqueKey();
            const isSelected = selectedGood === product;
            const productItemClass = classnames({
              product__item: true,
              hightlighted: isSelected,
            });

            return (
              <li
                key={key}
                className={productItemClass}
              >
                {product}
                <button
                  type="button"
                  className={classnames({
                    hide: isSelected,
                    product__btn: !isSelected,
                  })}
                  onClick={event => this.goNext(product)}
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
