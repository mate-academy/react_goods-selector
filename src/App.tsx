import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  selectedGood: string;
  goods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
    goods: goodsFromServer,
  };

  addGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  removeGood = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    return this.state.selectedGood === good;
  };

  render() {
    const { selectedGood, goods } = this.state;

    return (
      <div className="App">
        <h1 className="goods__title">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
          <button
            type="button"
            onClick={() => this.removeGood()}
          >
            X
          </button>
        </h1>

        <ul>
          {goods.map(good => (
            <div className="goods__list">
              <li
                className={classNames('goods__item', {
                  'goods__item--selected': this.selectGood(good),
                })}
              >
                {good}
              </li>

              <button
                type="button"
                className="goods__button"
                onClick={() => (
                  this.selectGood(good)
                    ? this.removeGood()
                    : this.addGood(good)
                )}
              >
                {this.selectGood(good)
                  ? 'Remove'
                  : 'Add'}
              </button>

            </div>
          ))}
        </ul>
      </div>
    );
  }
}
