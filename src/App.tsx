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

  addToCart = (good:string) => {
    this.setState((prevState) => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  };

  clearCart = () => {
    this.setState(
      { selectedGood: [] },
    );
  };

  formatTitleOfCart = () => {
    const { selectedGood } = this.state;

    switch (selectedGood.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGood} is selected`;
      default:
        return `${selectedGood.slice(0, -1)
          .join(', ')} and ${selectedGood
          .slice(-1)} is selected`;
    }
  };

  removeFromCart = (selected: string) => {
    const { selectedGood } = this.state;

    this.setState({
      selectedGood: selectedGood.filter(
        good => good !== selected,
      ),
    });
  };

  render() {
    const { selectedGood } = this.state;
    const renderedGood = goodsFromServer.map((good) => {
      const isGoodSelected = selectedGood.includes(good);

      const buttonEvents = isGoodSelected
        ? () => this.removeFromCart(good)
        : () => this.addToCart(good);

      const buttonTitle = isGoodSelected

        ? 'remove'
        : 'add';

      return (
        <li
          key={good}
          className={`good__item ${selectedGood.includes(good)
            ? 'active'
            : ''}`}
        >
          {good}
          <button
            type="button"
            className="good__add"
            onClick={buttonEvents}
          >
            {buttonTitle}
          </button>
        </li>
      );
    });

    return (
      <div className="App">
        <h1>
          {this.formatTitleOfCart()}
        </h1>
        <ul className="good__list">
          {renderedGood}
        </ul>
        {(selectedGood.length > 0) && (
          <button
            type="button"
            className="good__clear"
            onClick={this.clearCart}
          >
            Clear cart
          </button>
        )}
      </div>
    );
  }
}

export default App;
