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
  currentGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    currentGoods: ['Jam'],
  };

  selectOrRemove(inputGood: string) {
    const newArrayOfGoods = [...this.state.currentGoods];

    if (newArrayOfGoods.includes(inputGood)) {
      const indexToDelete = newArrayOfGoods.indexOf(inputGood);

      newArrayOfGoods.splice(indexToDelete, 1);
    } else {
      newArrayOfGoods.push(inputGood);
    }

    return newArrayOfGoods;
  }

  checkSelected(inputGood: string) {
    return this.state.currentGoods.includes(inputGood);
  }

  render() {
    const { currentGoods } = this.state;

    return (
      <div className="App">
        <div className="goods">
          <h1 className="goods__title">
            Selected good:
            {currentGoods.length !== 0 && (
              <button
                className="goods__clear btn btn-danger"
                type="button"
                onClick={() => {
                  this.setState(() => ({
                    currentGoods: [],
                  }));
                }}
              >
                Clear
              </button>
            )}
          </h1>
          <h2 className="goods__list">
            {currentGoods.length === 0 && 'No goods selected'}
            {currentGoods.length === 1 && `${currentGoods[0]} is selected`}
            {currentGoods.length === 2 && `${currentGoods.join(' and ')} are selected`}
            {currentGoods.length > 2 && `${currentGoods
              .slice(0, -1)
              .join(', ')} and ${currentGoods[currentGoods.length - 1]} are selected`}
          </h2>
        </div>

        <ul className="selects">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'selects__item',
                { selected: this.checkSelected(good) },
              )}
            >
              {good}

              <button
                className={classNames(
                  'btn',
                  'selects__button',
                  {
                    'btn-success': !this.checkSelected(good),
                    'btn-danger': this.checkSelected(good),
                  },
                )}
                type="button"
                onClick={() => {
                  this.setState(() => ({
                    currentGoods: this.selectOrRemove(good),
                  }));
                }}
              >
                {this.checkSelected(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
