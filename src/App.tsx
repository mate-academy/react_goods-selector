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

    if (basket.includes(item)) {
      // eslint-disable-next-line no-console
      console.log(`${item} removed`);

      this.setState((prevState) => ({
        selectedGoods:
          prevState.selectedGoods.filter((good) => (good !== item)),
      }));
    } else {
      // eslint-disable-next-line no-console
      console.log(`${item} added to basket`);

      this.setState((prevState) => ({
        selectedGoods: [...prevState.selectedGoods, item],
      }));
    }
  };

  displayItem = (item: string) => {
    return (
      <div key={item}>
        <br />
        {item}
        &#160;&#160;
        <button
          type="button"
          onClick={() => (this.basketTransfer(item))}
        >
          add/remove
        </button>
      </div>
    );
  };

  render() {
    const goods = this.state.selectedGoods;

    return (
      <div className="App">
        <h1>
          Selected good
          {(goods.length > 1) ? 's' : null}
          :&#160;
          {(goods.length > 1)
            ? this.displayGoods(goods)
            : goods}
        </h1>
        {goodsFromServer.map((good) => (
          this.displayItem(good)
        ))}
      </div>
    );
  }
}

export default App;
