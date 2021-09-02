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
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  addItem = (item: string) => {
    const { selectedGoods } = this.state;

    if (!selectedGoods.includes(item)) {
      this.setState({ selectedGoods: [...selectedGoods, item] });
    }
  };

  render() {
    const { selectedGoods } = this.state;
    const normalizedGoods = [
      selectedGoods.slice(0, -1).join(', '),
      selectedGoods.slice(-1),
    ].join(
      selectedGoods.length > 1
        ? ' and '
        : '',
    );

    return (
      <div className="App">

        <div className="App__container">
          <div className="App__header">
            <div className="App__title">
              <h1>
                {selectedGoods.length
                  ? 'Selected:'
                  : 'No goods selected'}
              </h1>
              {!!selectedGoods.length && (
                <button
                  className="App__clear-button"
                  type="button"
                  onClick={() => {
                    this.setState({ selectedGoods: [] });
                  }}
                >
                  +
                </button>
              )}
            </div>
            <p className="App__selected-items">
              {normalizedGoods}
            </p>
          </div>

          <ul className="App__items">
            {goodsFromServer.map(item => (
              <li className="App__item-wrapper" key={item}>
                <button
                  className={classNames('App__button', {
                    'App__button--pressed': selectedGoods.includes(item),
                  })}
                  type="button"
                  onClick={() => {
                    this.addItem(item);
                  }}
                >
                  +
                </button>
                <p className="App__item">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
