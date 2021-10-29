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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  selectGood = (selected: string) => {
    this.setState((prevSelected) => {
      const list = [...prevSelected.selectedGoods];

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      list.includes(selected)
        ? list.splice(list.indexOf(selected), 1)
        : list.push(selected);

      return ({ selectedGoods: list });
    });
  };

  clearSelected = () => this.setState({ selectedGoods: [] });

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="selected-goods">
          {(!!selectedGoods.length && 'Selected goods: ') || 'No goods selected'}

          {!!selectedGoods.length && (
            <button
              type="button"
              className="button-clear-selected"
              onClick={this.clearSelected}
            >
              ❌ Clear selectedGoods
            </button>
          )}

          <br />
          <span className="selected-goods__list">
            {
              selectedGoods.length > 2
                ? `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)}`
                : selectedGoods.join(', ')
            }
          </span>
        </h1>

        <ul className="goods-list">
          {goodsFromServer.map((good) => (
            <li
              className={classNames('goods-list__item', {
                'goods-list__item--selected': selectedGoods.includes(good),
              })}
            >
              <button
                type="button"
                className={classNames('goods-list__button', {
                  'goods-list__button--selected': selectedGoods.includes(good),
                })}
                onClick={() => this.selectGood(good)}
              >
                {(selectedGoods.includes(good) && '-') || '+'}
              </button>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
