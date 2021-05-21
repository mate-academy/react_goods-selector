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
    selectedGoods: [],
  }

  componentDidMount() {
    this.setState({ selectedGoods: ['Jam'] });
  }

  createTitle = () => {
    const goods = [...this.state.selectedGoods];
    const lastGood = goods[goods.length - 1];

    switch (goods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      default:
        goods.length -= 1;

        return `${goods.join(', ')} and ${lastGood} are selected`;
    }
  }

  addProduct = (product) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  }

  deleteProduct = (product) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(good => good !== product),
    }));
  }

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          <span className="title__text">
            {this.createTitle()}
          </span>

          <button
            type="button"
            className={classNames(`title__button`, {
              active: !selectedGoods.length,
            })}
            onClick={() => this.clearSelectedGoods()}
          >
            X
          </button>
        </h1>

        <ul className="goods">
          {goodsFromServer.map((product) => {
            const isAlreadyContainGood = selectedGoods.includes(product);

            return (
              <li
                key={product}
                className={classNames(`goods__item`, {
                  selected: isAlreadyContainGood,
                })}
              >
                <button
                  type="button"
                  className={`${isAlreadyContainGood
                    ? 'Active'
                    : 'NoneActive'}
                  `}
                  onClick={() => (isAlreadyContainGood
                    ? this.deleteProduct(product)
                    : this.addProduct(product))}
                >
                  {isAlreadyContainGood
                    ? `Remove ${product}`
                    : `Add ${product}
                  `}
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
