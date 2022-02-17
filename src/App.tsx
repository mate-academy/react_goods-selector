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

  selectGoods = (good: string) => {
    const mass = [...this.state.allSelectedGood];

    mass.push(good);
    this.setState({ allSelectedGood: [...mass] });
  };

  removeGoods = () => {
    this.setState({ allSelectedGood: [] });
  };

  removeGood = (good: string) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const mass = [...this.state.allSelectedGood];

    this.setState({ allSelectedGood: mass.filter(item => item !== good) });
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
          <button
            className="App__button"
            type="button"
            onClick={() => this.removeGoods()}
          >
            X
          </button>
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
              {this.state.allSelectedGood.includes(good)
                ? (
                  <button
                    type="button"
                    className="goods__button"
                    onClick={() => this.removeGood(good)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="goods__button"
                    onClick={() => this.selectGoods(good)}
                  >
                    Add
                  </button>
                )}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
