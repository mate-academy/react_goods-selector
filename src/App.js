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

export class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  addProduct = (product) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, product],
    }));
  }

  removeProduct = (product) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(good => good !== product),
    }));
  }

  clearList = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;
    const title = selectedGoods.length === 1
      ? `${selectedGoods} is selected`
      : `${selectedGoods.slice(0, -1).join(', ')},
      ${selectedGoods.slice(-1).join(' and ')} are selected.`;

    return (
      <section className="products">
        {selectedGoods.length > 0 ? (
          <h1 className="products__title">
            {title}
            <button
              type="button"
              className="products__button products__button--clear"
              onClick={() => this.clearList()}
            >
              X
            </button>
          </h1>
        ) : (
          <h1 className="products__title">
            No goods selected
          </h1>
        )}
        <ul className="products__list">
          {goodsFromServer.map((product, index) => {
            const isProductSelected = selectedGoods.includes(product);

            return (
              <React.Fragment key={product}>
                <li className="products__item">
                  <span className={
                    isProductSelected
                      ? 'products__product products__product--selected '
                      : 'products__product'
                    }
                  >
                    {`${index + 1}. ${product}`}
                  </span>
                  <button
                    type="button"
                    className={
                      isProductSelected
                        ? 'products__button products__button--removed'
                        : 'products__button products__button--added'
                    }
                    onClick={
                      isProductSelected
                        ? () => {
                          this.removeProduct(product);
                        }
                        : () => {
                          this.addProduct(product);
                        }
                      }
                  >
                    {
                      isProductSelected
                        ? 'Remove'
                        : 'Add'
                    }
                  </button>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default App;
