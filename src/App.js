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

class App extends React.Component {
  state = {
    goodsCounter: 1,
    selectedGoods: ['Jam'],
  }

  showGoodsList = (() => {
    const goods = [...this.state.selectedGoods];

    if (goods.length === 0) {
      return ' No goods selected.';
    }

    if (goods.length === 1) {
      return ` ${goods[0]} is selected.`;
    }

    const lastGood = goods.pop();

    return ` ${goods.join(', ')} and ${lastGood} are selected.`;
  })

  goodsHandler = (product) => {
    if (!this.state.selectedGoods.includes(product)) {
      this.setState(state => ({
        selectedGoods: [...state.selectedGoods, product],
        goodsCounter: state.goodsCounter + 1,
      }));
    } else {
      this.setState(state => ({
        selectedGoods: state.selectedGoods.filter(good => good !== product),
        goodsCounter: state.goodsCounter - 1,
      }));
    }
  }

  clearGoodsList = () => {
    this.setState({
      goodsCounter: 0,
      selectedGoods: [],
    });
  }

  render() {
    const { goodsCounter, selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1 className="header__title">
            Selected good: -
            {this.showGoodsList()}
          </h1>
        </div>

        <div className="main-content">
          <ul className="goods-list">
            {goodsFromServer.map(
              (product) => {
                const isProductSelected = selectedGoods.includes(product);

                return (
                  <li key={product}>
                    <div className="button-wrapper">
                      <button
                        type="button"
                        className={
                          `button ${isProductSelected
                            ? 'button__active'
                            : 'button__noneactive'}`
                        }
                        onClick={() => {
                          this.goodsHandler(product);
                        }}
                      >
                        {product}
                      </button>
                    </div>
                  </li>
                );
              },
            )}
            <li>
              <div className="button-wrapper">
                <button
                  type="button"
                  className="clear-button"
                  onClick={this.clearGoodsList}
                  hidden={!this.state.selectedGoods.length}
                />
              </div>
            </li>
            <li>
              <div className="button-wrapper">
                <button
                  type="button"
                  className="button"
                >
                  {` ${goodsCounter}`}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
