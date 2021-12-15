import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  productList: string[];
};

class App extends React.Component<{}, State> {
  state = {
    productList: ['Jam'],
  };

  clear = () => {
    this.setState({ productList: [] });
  };

  deleteProduct = (productIndex: number) => {
    this.setState(prev => {
      prev.productList.splice(productIndex, 1);

      return {
        productList: prev.productList,
      };
    });
  };

  addProduct = (product: string) => {
    this.setState(prev => ({ productList: [product, ...prev.productList] }));
  };

  titleCreate = () => {
    const { productList } = this.state;

    switch (productList.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${productList[0]} is selected`;

      case 2:
        return `${productList.join(' and ')} are selected`;

      default:
        return `${productList.slice(0, -2).join(', ')}, ${productList.slice(-2).join(' and ')} are selected`;
    }
  };

  render() {
    const { productList } = this.state;
    const title = this.titleCreate();

    return (
      <div className="app">
        <div className="app__head">
          <h1 className="app__title">
            {title}
          </h1>
          <button
            className={classNames('app__button app__button-red', { app__hidden: productList.length === 0 })}
            type="button"
            onClick={this.clear}
          >
            Clear
          </button>
        </div>

        <ul className="app__list">
          {goodsFromServer.map(product => {
            const isActive = productList.includes(product);
            const productIndex = productList.indexOf(product);

            return (
              <li
                className={classNames('app__item', { 'app__item-selected': isActive })}
                key={product}
              >
                {product}
                <button
                  className="app__button"
                  type="button"
                  onClick={() => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    isActive ? this.deleteProduct(productIndex) : this.addProduct(product);
                  }}
                >
                  {isActive ? '-' : '+'}
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
