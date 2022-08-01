import { Component } from 'react';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import './App.scss';
import './Goods.scss';

import goodsFromServer from './goods';

const preparedGoods = goodsFromServer.map(good => ({
  good,
  id: uuid(),
}));

type State = {
  selectedGoods: string[];
};

export class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clearSelected = () => this.setState({ selectedGoods: [] });

  removeGood = (selectedGood: string) => {
    this.setState((state) => (
      {
        selectedGoods: state.selectedGoods
          .filter(good => good !== selectedGood),
      }
    ));
  };

  addGood = (selectedGood: string) => {
    this.setState((prevState) => (
      { selectedGoods: [...prevState.selectedGoods, selectedGood] }
    ));
  };

  formatTitle = (selectedGoods: string[]) => {
    const selectedCount = selectedGoods.length;

    switch (selectedCount) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedCount - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App panel is-primary">
        <header className="App__header panel-heading">
          <h1 className="App__title">
            {this.formatTitle(selectedGoods)}
          </h1>

          {selectedGoods.length
            ? (
              <button
                type="button"
                className="App__clear button is-danger"
                onClick={this.clearSelected}
              >
                Clear
              </button>
            ) : ''}
        </header>

        <ul>
          {preparedGoods.map(({ good, id }) => {
            const isActive = selectedGoods.includes(good);

            return (
              <li
                key={id}
                className={classNames(
                  'Good',
                  { 'Good--active': isActive },
                )}
              >
                {good}

                {isActive
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
            );
          })}
        </ul>
      </main>
    );
  }
}
