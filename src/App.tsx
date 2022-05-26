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

type Props = {};

type State = {
  selectedGoods : string[],
};

class App extends React.Component <Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  displayGoods = (goods: string[]) => {
    const res = goods.join(', ').split('');

    res[res.lastIndexOf(',')] = ' and';

    return res.join('');
  };

  basketTransfer = (item: string) => {
    const basket = this.state.selectedGoods;

    this.setState((prevState) => ({
      selectedGoods: basket.includes(item)
        ? prevState.selectedGoods.filter((good) => (good !== item))
        : [...prevState.selectedGoods, item],
    }));
  };

  displayItem = (item: string) => {
    return (
      <li
        key={item}
        className={classNames(
          { selected: this.state.selectedGoods.includes(item) },
        )}
      >
        {item}
        &#160;&#160;
        <button
          type="button"
          onClick={() => (this.basketTransfer(item))}
        >
          {
            this.state.selectedGoods.includes(item)
              ? 'Remove'
              : 'Select'
          }
        </button>
      </li>
    );
  };

  clearList = () => {
    this.setState({ selectedGoods: [] });
  };

  headerHandler = () => {
    const goods = this.state.selectedGoods;

    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return (`${goods} is selected`);
    }

    return (`${this.displayGoods(goods)} are selected`);
  };

  render() {
    const goods = this.state.selectedGoods;

    return (
      <div className="App">
        <h1>
          {this.headerHandler()}
        </h1>
        {
          goods.length !== 0
            ? (
              <button
                type="button"
                onClick={this.clearList}
              >
                Clear
              </button>
            )
            : (
              <br />
            )
        }
        <ul>
          {goodsFromServer.map((good) => (
            this.displayItem(good)
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
