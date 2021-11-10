import React from 'react';
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

type Props = {};

interface State {
  selectedGood: string[],
}

export class App extends React.Component<Props, State> {
  state: State = {
    selectedGood: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((previousState) => ({
      selectedGood: [...previousState.selectedGood, good],
    }));
  };

  clearCart = () => {
    this.setState(
      { selectedGood: [] },
    );
  };

  goodsInCart = () => {
    const { selectedGood } = this.state;

    return (
      (selectedGood.length > 1)
        ? `${selectedGood.slice(0, -1).join(', ')} and ${selectedGood.slice(-1)} are selected`
        : `${selectedGood} is selected`
    );
  };

  render() {
    const { selectedGood } = this.state;
    const listOfGoods = goodsFromServer.map((good) => (
      <li
        key={good}
        className={`good__item ${selectedGood.includes(good) ? 'good--active' : ''}`}
      >
        {good}

        { selectedGood.includes(good)
          || (
            <button
              type="button"
              className="good__add"
              onClick={() => {
                this.selectGood(good);
              }}
            >
              Add in Cart
            </button>
          )}
      </li>
    ));

    return (
      <div className="App">
        <h1>{ `${selectedGood.length === 0 ? 'No goods selected' : this.goodsInCart()}` }</h1>
        <ul className="good__list">
          {listOfGoods}
        </ul>
        {(selectedGood.length > 0)
          ? (
            <button
              type="button"
              className="good__clear"
              onClick={() => {
                this.clearCart();
              }}
            >
              Clear cart
            </button>
          )
          : null}
      </div>
    );
  }
}
