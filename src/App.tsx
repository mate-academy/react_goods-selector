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

export class App extends React.Component {
  state = {
    goodsWithBoolIsSelected: goodsFromServer.map(
      str => ({
        goodName: str,
        isSelected: str === 'Jam',
      }),
    ),
  };

  render() {
    const { goodsWithBoolIsSelected: goods } = this.state;

    const selected = goods.filter(good => good.isSelected);
    const headerText = selected.length === 0
      ? 'No goods'
      : (selected.map(e => e.goodName).reduce((prev, next, index, targArr) => {
        return prev
                  + (index === targArr.length - 1
                    ? ' and ' : ', ')
                  + next;
      }))
      + (selected.length === 1 ? ' is' : ' are')
      + ' selected';

    return (
      <div className="app">
        <h1 className="app__selectedGood">
          {headerText}
        </h1>
        <ul className="app__listGoods">
          {goods.map(good => {
            return (
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
                  onClick={() => {
                    good.isSelected = !good.isSelected;
                    this.forceUpdate();
                  }}
                >
                  {good.isSelected ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className={
            classNames(
              {
                invisible: (!selected.length),
              },
            )
          }
          onClick={() => {
            goods.forEach(good => {
              good.isSelected = false;
            });
            this.forceUpdate();
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}
