import { Component } from 'react';
import classNames from 'classnames';

import Icon from './img/icon.svg';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGoods:string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: 'Jam',
  };

  selectHandler = (good: string) => {
    this.setState({ selectedGoods: good });
  };

  clearHandler = () => {
    this.setState({ selectedGoods: '' });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title title is-2">
            {selectedGoods
              ? `${selectedGoods} is selected`
              : 'No goods selected'}
          </h1>
          {selectedGoods && (
            <button
              type="button"
              className="App__clear button is-warning is-light is-medium"
              onClick={this.clearHandler}
            >
              Clear
            </button>
          )}
        </header>
        <ul className="Goods__list box">
          {goodsFromServer.map((good) => {
            const isSelected = good === selectedGoods;

            return (
              <li
                key={good}
                className={classNames('Goods__item Good box', {
                  'Good--active': isSelected,
                })}
              >
                <img src={Icon} alt="icon" className="image is-24x24" />
                {good}
                {!isSelected && (
                  <button
                    type="button"
                    className="Good__select button is-success is-light"
                    onClick={() => this.selectHandler(good)}
                  >
                    Select
                  </button>
                )}
                {isSelected && (
                  <button
                    type="button"
                    className="Good__remove button is-danger is-light"
                    onClick={this.clearHandler}
                  >
                    Remove
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
