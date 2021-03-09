/* eslint-disable no-unused-expressions */
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
    selected: ['Jam'],
  }

  componentDidUpdate(prefProp, prevState) {

  }

  addProductToList = (product) => {
    const { selected } = this.state;

    selected.includes(product)
      ? this.setState({
        selected: selected.filter(goods => goods !== product),
      })
      : this.setState({ selected: [...selected, product] });
  };

  clearProductList = () => {
    this.setState({
      selected: [],
    });
  }

  render() {
    const { selected: selectedGood } = this.state;

    return (
      <div className="App">
        <div className="header">
          {selectedGood.length > 0 && (
            <button
              type="button"
              onClick={this.clearProductList}
            >
              X
            </button>
          )}
          <h1>
            {selectedGood.length > 0 ? 'Selected Goods: ' : 'No goods selected'}
            {<span>{selectedGood.join(', ')}</span>}
          </h1>
        </div>
        <ul>
          {goodsFromServer.map(product => (
            <>
              <li
                key={product}
                className={classNames('products', {
                  active: selectedGood.includes(product),
                })}
              >
                {`${product}`}
                <button
                  type="button"
                  onClick={() => this.addProductToList(product)}
                >
                  {selectedGood.includes(product) ? 'remove' : 'select'}
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
