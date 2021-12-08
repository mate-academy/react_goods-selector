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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState((prevState) => {
      return {
        selectedGoods: [...prevState.selectedGoods, good],
      };
    });
  };

  removeGood = (good: string) => {
    this.setState((prevState) => {
      return {
        selectedGoods: prevState.selectedGoods.filter(item => item !== good),
      };
    });
  };

  clearAllGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  isGoodIncluded = (good: string) => {
    return this.state.selectedGoods.find(item => item === good);
  };

  goodsDisplay = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${selectedGoods.slice(0, -1)} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="title-block">
          <h1>
            Selected good:
            <span className="title-block__selectedGood">{this.goodsDisplay()}</span>
          </h1>
          {this.state.selectedGoods.length > 0 && (
            <button
              type="button"
              className="button button--clearAll"
              onClick={() => this.clearAllGoods()}
            >
              X
            </button>
          )}
        </div>
        {goodsFromServer.map(good => (
          <section className="goods" key={good}>
            <div className="goods__good good">
              <div className="good__item">{good}</div>
              {this.isGoodIncluded(good)
                ? (
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.removeGood(good)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="button"
                    onClick={() => this.addGood(good)}
                  >
                    Add
                  </button>
                )}
            </div>
          </section>
        ))}
      </div>
    );
  }
}

export default App;
