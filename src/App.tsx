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
  allSelectedGood: string[];
  goods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    allSelectedGood: ['Jam'],
    goods: goodsFromServer,
  };

  selectGood = (good: string) => {
    this.setState((state) => ({
      allSelectedGood: [...state.allSelectedGood, good],
    }));
  };

  removeGoods = () => {
    this.setState({ allSelectedGood: [] });
  };

  removeGood = (good: string) => {
    this.setState((state) => ({
      allSelectedGood: state.allSelectedGood.filter(item => item !== good),
    }));
  };

  render() {
    const { allSelectedGood, goods } = this.state;

    return (
      <div className="App">
        <div className="App__selectBlock">
          <h1 className="App__title">
            {(allSelectedGood.length !== 0)
              ? `${allSelectedGood} is selected`
              : 'No goods selected'}
          </h1>
          {(allSelectedGood.length !== 0) && (
            <button
              className="App__button"
              type="button"
              onClick={this.removeGoods}
            >
              X
            </button>
          )}
        </div>

        <ul>
          {goods.map(good => (
            <div className="goods__list">
              <li
                className={classNames('goods__item', {
                  'goods__item--selected': this.state.allSelectedGood.includes(good),
                })}
              >
                {good}
              </li>
              <button
                type="button"
                className="goods__button"
                onClick={this.state.allSelectedGood.includes(good)
                  ? () => this.removeGood(good)
                  : () => this.selectGood(good)}
              >
                {`${this.state.allSelectedGood.includes(good)
                  ? 'Remove'
                  : 'Add'}`}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
