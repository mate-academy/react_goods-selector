import React from 'react';
import classNames from 'classnames';
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
    selectedGood: ['Jam'],
  }

  addProducts = (product) => {
    const { selectedGood } = this.state;

    this.setState({
      selectedGood: [product, ...selectedGood],
    });
  }

  removeProducts = (product) => {
    const { selectedGood } = this.state;

    this.setState({
      selectedGood: selectedGood.filter(el => el !== product),
    });
  }

  deletedProducts = () => {
    this.setState({
      selectedGood: [],
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app container">
        <ul className="list">
          {goodsFromServer.map(product => (
            <li key={product} className="list-item">
              <p className={
                classNames('list-text', {
                  list__active: selectedGood.includes(product),
                })}
              >
                {product}
              </p>
              <div className="btns">
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    this.addProducts(product);
                  }}
                >
                  Select
                </button>
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    this.removeProducts(product);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <>
          {selectedGood.length > 0 && (
            <button
              type="button"
              className="products__delete"
              onClick={this.deletedProducts}
            >
              Х
            </button>
          )}
        </>
        <h1>
          Selected good: -
          {' '}
          {selectedGood.length
            ? `${selectedGood.join(', ')} is selected`
            : `No goods selected`
          }
        </h1>
        <h2>
          Selected: -
          {' '}
          {selectedGood.length}
        </h2>
      </div>
    );
  }
}

export default App;
