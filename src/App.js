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
    selected: '',
    space: ' ',
  };

  saveHandler = (productName) => {
    this.setState({ selected: productName });
  }

  clearSelected = () => {
    this.setState({ selected: '' });
  }

  render() {
    return (
      <div className="App">
        <div className="selected">
          <h1>
            Selected good: -
            {this.state.space + this.state.selected}
          </h1>
          <button
            type="submit"
            className={classNames(`product__delete`, {
              mark__delete: this.state.selected,
            })}
            onClick={() => {
              this.clearSelected(this.state.selected);
            }}
          >
            X
          </button>
        </div>

        <div className="products">
          {
            goodsFromServer.map(productName => (
              <button
                type="submit"
                className={classNames('product', {
                  product__mark: this.state.selected === productName,
                })}
                key={productName}
                onClick={() => {
                  this.saveHandler(productName);
                }}
              >
                {productName}
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
