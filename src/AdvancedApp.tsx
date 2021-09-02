import React from 'react';
import { Button } from './Button';
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

class App extends React.Component<{}, State> {
  state: State = {
    goodsInCart: [],
  };

  addGood = (good: string) => {
    this.setState((prevState: State): State => {
      return {
        goodsInCart: [...prevState.goodsInCart, good],
      };
    });
  };

  removeGood = (good: string) => {
    this.setState((prevState: State): State => {
      return {
        goodsInCart: prevState.goodsInCart.filter(product => product !== good),
      };
    });
  };

  unselectAll = () => {
    this.setState({ goodsInCart: [] });
  };

  render() {
    const { goodsInCart } = this.state;
    const itemsExceptLastOne = goodsInCart.slice(0, goodsInCart.length - 1);
    const lastItem = goodsInCart.slice(goodsInCart.length - 1);

    const titleLengthCheck = goodsInCart.length > 1
      ? `${itemsExceptLastOne.join(', ')} and ${lastItem} are selected`
      : `${goodsInCart} is selected`;

    return (
      <div className="App">
        <h1 className="App__title">
          {goodsInCart.length ? titleLengthCheck : 'No goods in cart'}
        </h1>
        {!goodsInCart.length || (
          <Button
            action={this.unselectAll}
            stylingClass="App__button--unselect"
            text="X"
          />
        )}
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="App__item"
            >
              {good}
              {goodsInCart.includes(good) ? (
                <Button
                  action={() => {
                    this.removeGood(good);
                  }}
                  stylingClass="App__button--remove"
                  text="Remove"
                />
              ) : (
                <Button
                  action={() => {
                    this.addGood(good);
                  }}
                  stylingClass="App__button--add"
                  text="Add"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
