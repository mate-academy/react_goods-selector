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
  state = {
    selectedGoods: [],
  };

  addGood = (good: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods.filter(item => item !== good)],
    }));
  };

  resetGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  changedGoods = (good: string) => {
    if (this.state.selectedGoods.some(item => item === good)) {
      this.removeGood(good);
    } else {
      this.addGood(good);
    }
  };

  selectedGoodsForUser = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__title">
          <h1 className="App__text">
            <b>Selected goods: </b>
            {this.selectedGoodsForUser()}
          </h1>
          <button
            type="button"
            className={selectedGoods.length < 1
              ? 'App__button--reset-off'
              : 'btn btn-danger'}
            onClick={() => {
              this.resetGoods();
            }}
          >
            RESET
          </button>
        </div>
        <section className="App__list">
          <div className="App__cards">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={`App__card ${selectedGoods.some(item => item === good)
                  ? 'App__card-selected'
                  : 'App__card'}`}
              >
                <p className="App__text">{good}</p>
                <button
                  type="button"
                  className="App__button btn btn-primary"
                  onClick={() => {
                    this.changedGoods(good);
                  }}
                >
                  {selectedGoods.some(item => item === good)
                    ? 'REMOVE'
                    : 'ADD'}
                </button>
              </li>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
