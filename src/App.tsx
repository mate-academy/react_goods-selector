/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';

import classNames from 'classnames';
import goodsFromServer from './goods';

type State = {
  selectedGoods: string[]
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  setTitle = () => {
    const { selectedGoods } = this.state;
    const { length } = selectedGoods;

    switch (length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods.join(',')} are selected`;
      default:
        return `${selectedGoods.slice(0, length - 1).join(', ')} and ${selectedGoods[length - 1]} are selected`;
    }
  };

  handlingRemove = (good: string) => {
    this.setState((el) => ({
      selectedGoods: el.selectedGoods.filter(item => item !== good),
    }));
  };

  handlingSelect = (good: string) => {
    this.setState((el) => ({
      selectedGoods: [...el.selectedGoods, good],
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header block breadcrumb is-centered">
          <h1 className="App__title hero">
            {this.setTitle()}
          </h1>

          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="App__clear button is-danger is-rounded"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="GoodsList">
          {goodsFromServer.map(good => {
            const isSelected = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames(
                  'Good block',
                  { 'Good--active block': isSelected },
                )}
              >
                {good}

                {isSelected
                  ? (
                    <button
                      type="button"
                      className="Good__remove button is-danger is-rounded"
                      onClick={() => this.handlingRemove(good)}
                    >
                      Delete
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="Good__select button is-success is-rounded"
                      onClick={() => this.handlingSelect(good)}
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
