import React, { Props } from 'react';
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
  goodsInCart: string[];
};

class App extends React.Component<Props<State>, State> {
  state: State = {
    goodsInCart: [],
  };

  addGood = (good: string) => {
    this.state.goodsInCart.push(good);
    this.setState((prevState: State): State => {
      return {
        goodsInCart: prevState.goodsInCart,
      };
    });
  };

  removeGood = (good: string) => {
    const goodToRemove = this.state.goodsInCart.findIndex(product => product === good);

    this.state.goodsInCart.splice(goodToRemove, 1);

    this.setState((prevState: State): State => {
      return {
        goodsInCart: prevState.goodsInCart,
      };
    });
  };

  unselectAll = () => {
    this.state.goodsInCart = [];
    this.setState({ goodsInCart: [] });
  };

  render() {
    const { goodsInCart } = this.state;
    const itemsExceptTheLast = goodsInCart.slice(0, goodsInCart.length - 1);
    const lastItem = goodsInCart.slice(goodsInCart.length - 1);

    return (
      <div className="App">
        {goodsInCart.length === 0 ? (
          <h1 className="App__title">
            No goods in cart
          </h1>
        ) : (
          <>
            <h1 className="App__title">
              {goodsInCart.length === 1 ? (
                `${goodsInCart} is selected`
              ) : (
                `${itemsExceptTheLast.join(', ')}
                and ${lastItem} are selected`
              )}
            </h1>
            <button
              type="button"
              className="App__button--unselect"
              onClick={this.unselectAll}
            >
              X
            </button>
          </>
        )}
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="App__item"
            >
              {good}
              {goodsInCart.includes(good) ? (
                <button
                  type="button"
                  className="App__button--remove"
                  onClick={() => {
                    this.removeGood(good);
                  }}
                >
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  className="App__button--add"
                  onClick={() => {
                    this.addGood(good);
                  }}
                >
                  Add
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
