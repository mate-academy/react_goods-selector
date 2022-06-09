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

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  removeProduct = (good: string) => {
    this.setState((lastState) => ({
      selectedGoods:
        lastState.selectedGoods.filter((item) => item !== good),
    }));
  };

  addProduct = (good: string) => {
    this.setState((lastState) => (
      { selectedGoods: [...lastState.selectedGoods, good] }
    ));
  };

  resetCart = () => (
    this.setState({ selectedGoods: [] })
  );

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="list-item">
          <h1>
            {this.state.selectedGoods}
            {' '}

            <button
              type="button"
              onClick={this.resetCart}
            >
              Clear goods
            </button>
          </h1>
        </div>

        <ul>
          {goodsFromServer.map((good) => {
            const buttonName = selectedGoods.includes(good)
              ? 'Remove'
              : 'Select';

            const handle = () => (
              selectedGoods.includes(good)
                ? this.removeProduct(good)
                : this.addProduct(good)
            );

            return (
              <div className="goods">
                <li key={good}>
                  {good}
                </li>
                <button
                  type="button"
                  onClick={handle}
                >
                  {buttonName}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
