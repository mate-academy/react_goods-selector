import React from 'react';
import classNames from 'classnames';
import './App.scss';

const goodsArrayFromServer: string[] = [
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
  selectedGood: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addSelect = (item: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, item],
    }));
  };

  removeSelect = (item: string) => {
    const index = this.state.selectedGood.indexOf(item);

    this.state.selectedGood.splice(index, 1);
    this.setState((state) => ({
      selectedGood: [...state.selectedGood],
    }));
  };

  render() {
    const goodsArray = this.state.selectedGood;
    const titleOneGoods = `${goodsArray[0]} is selected`;
    const titleEmpty = 'No goods selected';
    const titleFull = `${goodsArray.slice(0, goodsArray.length - 1).join(', ')}`
    + ` and ${goodsArray[goodsArray.length - 1]} is selected`;

    const titleInner = goodsArray.length > 1
      ? titleFull
      : titleOneGoods;

    return (
      <div className="App">
        <div className="titleContainer">
          <h1 className="title">
            {goodsArray.length === 0 ? titleEmpty : titleInner}
          </h1>
          <button
            className={classNames(
              'title-button',
              {
                'title-button--visible': this.state.selectedGood.length === 0,
              },
            )}
            type="button"
            onClick={() => (
              this.setState({ selectedGood: [] })
            )}
          >
            X
          </button>
        </div>
        <ul className="goodsList">
          {goodsArrayFromServer.map(item => (
            <li
              key={item}
              className={classNames(
                'goodsList__item',
                {
                  'goodsList__item--active': this.state.selectedGood.includes(item),
                },
              )}
            >
              <div>{item}</div>
              <button
                className={classNames(
                  'goodsList__button',
                  {
                    'goodsList__button--visible': this.state.selectedGood.includes(item),
                  },
                )}
                type="button"
                onClick={() => {
                  this.addSelect(item);
                }}
              >
                Add
              </button>
              <button
                className={classNames(
                  'goodsList__button goodsList__button--remove',
                  {
                    'goodsList__button--visible': !this.state.selectedGood.includes(item),
                  },
                )}
                type="button"
                onClick={() => {
                  this.removeSelect(item);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
