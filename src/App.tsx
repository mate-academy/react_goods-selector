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
];

type State = {
  currentGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    currentGoods: ['Jam'],
  };

  clear = () => {
    this.setState({ currentGoods: [] });
  };

  checkGoods = (includeGood: string) => {
    return this.state.currentGoods.includes(includeGood);
  };

  selectAndRemove = (good: string) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const newGood = [...this.state.currentGoods];

    if (newGood.includes(good)) {
      newGood.splice(newGood.indexOf(good), 1);
    } else {
      newGood.push(good);
    }

    return this.setState({ currentGoods: newGood });
  };

  printGoods = () => {
    const newGood = [...this.state.currentGoods];
    const lastElem = newGood.slice(-1, newGood.length);

    if (newGood.length > 1) {
      return `${newGood.slice(0, newGood.length - 1).join(', ')} and ${lastElem} are selected.`;
    }

    return `${newGood} is selected.`;
  };

  render() {
    const { currentGoods } = this.state;

    return (
      <div className="good content is-medium">
        <button
          type="button"
          onClick={this.clear}
          className={classNames('goood__clear button is-danger', {
            'is-invisible': currentGoods.length === 0,
          })}
        >
          Clear
        </button>
        <h1 className="good__title">Selected good: </h1>
        <h2 className="good__subtitle">
          {currentGoods.length === 0 ? (
            <>
              No goods selected
            </>
          ) : <>{this.printGoods()}</>}
        </h2>
        <ul className="good__list">
          {
            goodsFromServer.map(good => (
              <>
                <li key={good} className="good__item">
                  {good}
                  <button
                    type="button"
                    onClick={() => {
                      this.selectAndRemove(good);
                    }}
                    className={classNames(
                      this.checkGoods(good) ? (
                        'button is-danger is-rounded'
                      ) : 'button is-primary is-rounded',
                    )}
                  >
                    {this.checkGoods(good) ? (
                      <>Remove</>
                    ) : <>Select</>}
                  </button>
                </li>
              </>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
