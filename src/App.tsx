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

interface State {
  selectedGoods: string[];
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGoods = (goods: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, goods] });
  };

  removeGoods = (goods: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: selectedGoods.filter(good => good !== goods) });
  };

  ifThisGoodsSelected = (goods: string) => {
    const { selectedGoods } = this.state;

    const isSelected = !selectedGoods.includes(goods)
      ? () => this.addGoods(goods)
      : () => this.removeGoods(goods);

    return isSelected;
  };

  clearAllGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  title = () => {
    const { selectedGoods } = this.state;
    const firstPartofGoods = selectedGoods.slice(0, selectedGoods.length - 1);
    const lastPartofGoods = selectedGoods.slice(-1);
    const title = selectedGoods.length > 1
      ? `${firstPartofGoods.join(', ')} and ${lastPartofGoods} are selected`
      : `${selectedGoods} is selected`;

    return title;
  };

  render() {
    const { selectedGoods } = this.state;
    const isGoodsSelected = selectedGoods.length > 0;

    return (
      <div className="App">
        <div className="title-wrap">
          <h1>{isGoodsSelected ? this.title() : 'No goods selected'}</h1>
          {isGoodsSelected
            && (
              <button
                className="button"
                type="submit"
                onClick={this.clearAllGoods}
              >
                Clear list
              </button>
            )}
        </div>
        <ul className="goods">
          {
            goodsFromServer.map(goods => (
              <li key={goods}>
                <button
                  className={`button ${selectedGoods.includes(goods) && 'remove-button'}`}
                  type="submit"
                  onClick={this.ifThisGoodsSelected(goods)}
                >
                  {goods}
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
