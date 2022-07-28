import { Component } from 'react';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[];
};

export class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clearSelected = () => this.setState({ selectedGoods: [] });

  removeGood = (good: string) => {
    this.setState((prevState) => (
      { selectedGoods: prevState.selectedGoods.filter(el => el !== good) }
    ));
  };

  addGood = (good: string) => {
    this.setState((prevState) => (
      { selectedGoods: [...prevState.selectedGoods, good] }
    ));
  };

  render() {
    const { selectedGoods } = this.state;
    const selectedCount = selectedGoods.length;
    let selectedInfo = 'No goods selected';

    if (selectedCount === 1) {
      selectedInfo = `${selectedGoods} is selected`;
    }

    if (selectedCount > 1) {
      selectedInfo = `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedCount - 1]} are selected`;
    }

    return (
      <main className="App panel is-primary">
        <header className="App__header panel-heading">
          <h1 className="App__title">
            {selectedInfo}
          </h1>

          {selectedGoods.length && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={this.clearSelected}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'Good',
                { 'Good--active': selectedGoods.includes(good) },
              )}
            >
              {good}

              {selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-danger"
                    onClick={() => this.removeGood(good)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select button is-success"
                    onClick={() => this.addGood(good)}
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
