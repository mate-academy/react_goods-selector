import classNames from 'classnames';
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
  'Beer',
  'Vodka',
];

type State = {
  currentGoods: string[];
  counter: number;
};

class App extends React.Component<{}, State> {
  state = {
    currentGoods: ['Jam'],
    counter: 1,
  };

  clear = () => {
    this.setState({ currentGoods: [] });
    this.setState({ counter: 0 });
  };

  checkGoods = (includeGood: string) => {
    return this.state.currentGoods.includes(includeGood);
  };

  selectAndRemove = (good: string) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const newGood = [...this.state.currentGoods];

    if (newGood.includes(good)) {
      newGood.splice(newGood.indexOf(good), 1);
      this.state.counter -= 1;
    } else {
      newGood.push(good);
      this.state.counter += 1;
    }

    return this.setState({ currentGoods: newGood });
  };

  printGoods = () => {
    const newGood = this.state.currentGoods;
    const lastElem = newGood.slice(-1, newGood.length);

    if (newGood.length > 1) {
      return `${newGood.slice(0, newGood.length - 1).join(', ')} and ${lastElem} are selected.`;
    }

    return `${newGood} is selected.`;
  };

  render() {
    const { currentGoods, counter } = this.state;

    return (
      <div className="good content is-medium" itemID="top">
        <h2 className="good__title">{`Selected good: ${counter}`}</h2>
        <h3 className="good__subtitle">
          {currentGoods.length === 0 ? (
            <>
              No goods selected
            </>
          ) : <>{this.printGoods()}</>}
        </h3>
        <ul className="good__list">
          {
            goodsFromServer.map(good => (
              <li key={good} className={`good__item good--${good}`}>
                {good}
                <button
                  type="button"
                  onClick={() => {
                    this.selectAndRemove(good);
                  }}
                  className={classNames(
                    'good__buttons is-rounded',
                    this.checkGoods(good) ? (
                      'button is-danger'
                    ) : 'button is-primary',
                  )}
                >
                  {this.checkGoods(good) ? (
                    <>Remove</>
                  ) : <>Select</>}
                </button>
              </li>
            ))
          }
          <a href="#top" className="good__clear">
            <button
              type="button"
              onClick={this.clear}
              className={classNames('good__button-clear button is-danger', {
                'is-invisible': currentGoods.length === 0,
              })}
            >
              Clear
            </button>
          </a>
        </ul>
      </div>
    );
  }
}

export default App;
