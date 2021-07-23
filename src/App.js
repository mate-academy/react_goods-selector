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

  makeProductsList = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods} - is selected.`;

      case 2:
        return `${selectedGoods.join(' and ')} - are selected.`;

      default: {
        return `
          ${selectedGoods.slice(0, -2).join(', ')},
          ${selectedGoods.slice(-2).join(' and ')} are selected.
        `;
      }
    }
  };

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

    return (
      <section className="products">
        <h1 className="products__title">
          {this.makeProductsList()}
        </h1>
        {!!selectedGoods.length
          && (
          <button
            type="button"
            className="products__button products__button--clear"
            onClick={() => this.clearList()}
          >
            Clear
          </button>
          )
        }
        <ul className="products__list">
          {goodsFromServer.map((product, index) => {
            const isProductSelected = selectedGoods.includes(product);

            return (
              <React.Fragment key={product}>
                <li className="products__item">
                  <span className={
                    isProductSelected
                      ? 'products__product products__product--selected '
                      : 'products__product products__product--unselected'
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
