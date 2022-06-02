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

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  onSelect = (good: string) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  onDelete = (good: string) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== good),
    }));
  };

  deleteAll = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  listToShow = () => {
    if (this.state.selectedGoods.length === 1) {
      return `${this.state.selectedGoods.join(', ')} is selected`;
    }

    return `${this.state.selectedGoods.join(', ')} are selected`;
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {this.state.selectedGoods.length > 0
            ? this.listToShow()
            : 'No goods selected'}
        </h1>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li key={good} className="list__item">
              <p className="list__name">{good}</p>
              {this.state.selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    onClick={() => this.onDelete(good)}
                    className="App__button App__button--remove"
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    onClick={() => this.onSelect(good)}
                    className="App__button App__button--select"
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => this.deleteAll()}
          className="App__button App__button--close"
        >
          Clear
        </button>
      </div>
    );
  }
}
