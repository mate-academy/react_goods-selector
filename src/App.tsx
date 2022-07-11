import classNames from 'classnames';
import { Component } from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

type State = {
  selectedProducts: string[],
};

export class App extends Component<{}, State> {
  state = {
    selectedProducts: ['Jam'],
  };

  addProducts = (product: string) => {
    const { selectedProducts } = this.state;

    this.setState({
      selectedProducts: (selectedProducts.includes(product)
        ? selectedProducts.filter(select => select !== product)
        : [...selectedProducts, product]
      ),
    });
  };

  clear = () => {
    this.setState({
      selectedProducts: [],
    });
  };

  render() {
    const { selectedProducts } = this.state;
    const listProducts = (product: string[]) => (product.length > 1
      ? `${selectedProducts.join(', ')} are selected`
      : `${selectedProducts.join(', ')} is selected`);

    return (
      <div className="App">
        <div className="selected">
          <h1 className="selected__list">
            {selectedProducts.length
              ? listProducts(selectedProducts)
              : 'No goods selected'}
          </h1>
          {selectedProducts.length
            ? (
              <button
                type="button"
                className="button is-warning"
                onClick={this.clear}
              >
                clear
              </button>
            )
            : undefined}
        </div>
        {goodsFromServer.map(product => (
          <div className={classNames(
            'list',
            selectedProducts.includes(product)
              ? 'color'
              : '',
          )}
          >
            <div>{product}</div>
            <div className="buttons">

              <button
                type="button"
                className={classNames(
                  'button',
                  selectedProducts.includes(product)
                    ? 'is-danger'
                    : 'is-primary',
                )}
                onClick={() => this.addProducts(product)}
              >
                {selectedProducts.includes(product)
                  ? 'remove'
                  : 'select'}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
