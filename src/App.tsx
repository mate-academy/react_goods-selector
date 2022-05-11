/* eslint-disable no-param-reassign */
/* eslint-disable prefer-template */
import React from 'react';
import classNames from 'classnames';
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

type GoodsWithBoolIsSelected = {
  goodName: string;
  isSelected: boolean;
};

interface State {
  goodsWithBoolIsSelected: Array<GoodsWithBoolIsSelected>
}

export class App extends React.Component<{}, State> {
  state: State = {
    goodsWithBoolIsSelected: goodsFromServer.map(
      str => ({
        goodName: str,
        isSelected: str === 'Jam',
      }),
    ),
  };

  getStringDescription = (goods: Array<string>): string => {
    const start = goods.length ? '' : 'No goods';
    const end = (goods.length > 2)
      ? [
        goods.slice(0, -1).join(', '),
        goods.slice(-1),
      ].join(' and ')
      : goods.join(' and ');

    return start + end;
  };

  selectGood = (name: string) => {
    this.setState((prevState) => {
      const clone = prevState.goodsWithBoolIsSelected.map(e => ({ ...e }));
      const index = clone.findIndex(e => e.goodName === name);

      clone[index].isSelected = !clone[index].isSelected;

      return ({
        goodsWithBoolIsSelected: clone,
      });
    });
  };

  clearSelected = () => {
    this.setState((prevState) => {
      const clone = prevState.goodsWithBoolIsSelected.map(e => ({ ...e }));

      clone.forEach(good => {
        good.isSelected = false;
      });

      return ({
        goodsWithBoolIsSelected: clone,
      });
    });
  };

  render() {
    const { goodsWithBoolIsSelected: goods } = this.state;

    const selected = goods.filter(good => good.isSelected).map(e => e.goodName);
    const headerText = this.getStringDescription(selected);

    return (
      <div className="app">
        <h1 className="app__selectedGood">
          {headerText}
        </h1>
        <ul className="app__listGoods">
          {goods.map(good => (
            <li
              key={good.goodName}
              className={
                classNames(
                  'app__listItem',
                  {
                    app__listItemSelected: (good.isSelected),
                  },
                )
              }
            >
              {good.goodName}
              <button
                type="button"
                onClick={() => this.selectGood(good.goodName)}
              >
                {good.isSelected ? 'Remove' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={
            classNames(
              {
                invisible: !selected.length,
              },
            )
          }
          onClick={this.clearSelected}
        >
          Clear
        </button>
      </div>
    );
  }
}
