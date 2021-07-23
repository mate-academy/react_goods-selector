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

  updateTitle = () => {
    const { selectedGood } = this.state;

    if (selectedGood.length > 0) {
      return `Selected product: ${selectedGood}`;
    }

    return 'Please select product from the list';
  }

  isSelected = (product) => {
    this.setState({ selectedGood: product });
  }

  clearSelectedGoods = () => {
    this.setState({ selectedGood: [] });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {this.updateTitle()}
        </h1>
        <button
          type="button"
          className={
            classNames(
              'visible btn btn-dark',
              { 'hidden btn btn-dark': selectedGood.length === 0 },
            )
          }
          onClick={() => {
            this.clearSelectedGoods();
          }}
        >
          X
        </button>
        <ol className="list">
          {goodsFromServer.map(product => (
            <>
              <div className="container table">
                <li
                  key={product}
                  className={product === this.state.selectedGood
                    ? 'selected'
                    : 'product'
                  }
                >
                  {product}
                </li>
                <button
                  type="button"
                  className={
                    classNames(
                      'visible btn btn-success',
                      // eslint-disable-next-line max-len
                      { 'hidden btn btn-success': product === this.state.selectedGood },
                    )
                  }
                  onClick={() => {
                    this.isSelected(product);
                  }}
                >
                  Select
                </button>
              </div>
            </>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
