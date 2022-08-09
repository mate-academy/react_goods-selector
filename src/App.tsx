import { Component } from 'react';
import classNames from 'classnames';

import './App.scss';

import goodsFromServer from './goods';

type Good = string;

type State = {
  selectedGoods: Good[],
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  isSelected = (searchGood: Good) => {
    return this.state.selectedGoods.includes(searchGood);
  };

  removeSelectedGood = (
    good: Good,
  ) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(product => product !== good),
    }));
  };

  cleareSelectedGoods = () => this.setState({
    selectedGoods: [],
  });

  addSelectedGood = (product: Good) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, product],
    }));
  };

  getTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;

      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header mt-4 mb-4">
          <h1 className="App__title">
            {this.getTitle()}
          </h1>

          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={this.cleareSelectedGoods}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="notification is-link">
          {goodsFromServer.map(good => (
            <li
              className={
                classNames(
                  'pt-1',
                  'pb-1',
                  'Good',
                  { 'Good--active': this.isSelected(good) },
                )
              }
              key={good}
            >
              <p>
                {good}
              </p>
              {this.isSelected(good)
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-danger"
                    onClick={() => (this.removeSelectedGood(good))}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select button is-success"
                    onClick={() => this.addSelectedGood(good)}
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
