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
    chosenGoods: ['Jam'],
  }

  choseToggleHandler = (product) => {
    if (this.state.chosenGoods.includes(product)) {
      this.setState(state => ({
        chosenGoods: state.chosenGoods.filter(current => current !== product),
      }));
    } else {
      this.setState(state => ({
        chosenGoods: [...state.chosenGoods, product],
      }));
    }
  }

  removeGoodsHandler = () => {
    this.setState({
      chosenGoods: [],
    });
  }

  getTitle = () => {
    let title;
    const { chosenGoods } = this.state;

    if (chosenGoods.length === 0) {
      title = 'No goods are selected';
    } else if (chosenGoods.length === 1) {
      title = `${chosenGoods.join(', ')} is selected`;
    } else {
      title = `${chosenGoods.join(', ')} are selected`;
    }

    return title;
  }

  render() {
    const { chosenGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.getTitle()}
        </h1>

        {chosenGoods.length > 0 && (
          <button
            type="button"
            className="App__removeAllBtn"
            onClick={this.removeGoodsHandler}
          >
            remove all chosen goods
          </button>
        )}

        <ul className="App__goodsList goodsList">
          {goodsFromServer.map((product) => {
            const isChosen = chosenGoods.includes(product);

            return (
              <li
                className={
                  isChosen
                    ? 'goodsList__item goodsList__item_selected'
                    : 'goodsList__item'
                }
                key={product}
              >
                {product}
                <button
                  className="goodsList__toggleBtn"
                  type="button"
                  onClick={() => {
                    this.choseToggleHandler(product);
                  }}
                >
                  { isChosen ? 'Remove' : 'Choose' }
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
