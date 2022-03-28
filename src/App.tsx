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

type Props = {};

type State = {
  selectedGoods: string[];
};

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  titleMaker = (arr: string[]) => {
    switch (true) {
      case arr.length > 1:
        return `${arr.slice(0, -1).join(', ')} and ${arr[arr.length - 1]} are selected`;
      case arr.length === 1:
        return `${arr[0]} is selected`;
      default:
        return 'No selected goods';
    }
  };

  removeAll = () => {
    this.setState({ selectedGoods: [] });
  };

  addGood(value: string) {
    this.setState((state) => (
      { selectedGoods: [...state.selectedGoods, value] }
    ));
  }

  removeGood(value: string) {
    this.setState((state) => {
      return { selectedGoods: state.selectedGoods.filter(item => item !== value) };
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App goods">
        <div className="goods__title-box">
          <h1 className="goods__title">
            {this.titleMaker(selectedGoods)}
          </h1>
          <button
            type="button"
            onClick={() => {
              this.removeAll();
            }}
            hidden={selectedGoods.length < 1}
            className="goods__remove"
          >
            x
          </button>
        </div>
        <ul className="goods-list">
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={
                `item
                goods-list__item
                ${selectedGoods.includes(good) ? 'item--selected' : ''}`
              }
            >
              <span className="item__text">
                {good}
              </span>
              <button
                className={
                  `button item__button
                  ${selectedGoods.includes(good) ? 'button--selected' : ''}`
                }
                type="button"
                onClick={() => {
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  selectedGoods.includes(good)
                    ? this.removeGood(good)
                    : this.addGood(good);
                }}
              >
                {
                  selectedGoods.includes(good)
                    ? 'remove'
                    : 'select'
                }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
