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

export default class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  reset = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  add = (good: string) => {
    this.setState((prev) => ({
      selectedGoods: [...prev.selectedGoods, good],
    }));
  };

  remove = (good: string) => {
    if (this.state.selectedGoods.includes(good)) {
      this.setState((prev) => {
        const newArray = [...prev.selectedGoods];

        newArray.splice(prev.selectedGoods.indexOf(good), 1);

        return {
          selectedGoods: newArray,
        };
      });
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.state.selectedGoods.length !== 0 ? `${this.state.selectedGoods[this.state.selectedGoods.length - 1]} is selected` : 'No selected goods'}
        </h1>

        <ul>
          {goodsFromServer.map(good => {
            return (
              <li
                key={good}
                className={selectedGoods.includes(good)
                  ? 'App__good--isactive'
                  : 'App__good'}
              >
                {good}
                {selectedGoods.includes(good)
                  ? <button type="button" className="btn btn-outline-danger App__button" onClick={() => this.remove(good)}>Remove</button>
                  : <button type="button" className="btn btn-outline-success App__button" onClick={() => this.add(good)}>Add</button>}
              </li>
            );
          })}
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              className="App__reset btn btn-outline-danger"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </ul>
      </div>
    );
  }
}
