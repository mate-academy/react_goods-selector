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

export class App extends React.Component {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGoods = (goods: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, goods] });
  };

  removeGoods = (goods: string) => {
    const { selectedGoods } = this.state;

    this.setState(selectedGoods.splice(selectedGoods.indexOf(goods), 1));
  };

  clearAllGoods = () => {
    const { selectedGoods } = this.state;

    this.setState(selectedGoods.splice(0, selectedGoods.length));
  };

  render() {
    const { selectedGoods } = this.state;
    const isGoodsSelected = selectedGoods.length > 0;
    const firstPartofGoods = selectedGoods.slice(0, selectedGoods.length - 1);
    const lastPartofGoods = selectedGoods.slice(-1);
    const title = selectedGoods.length > 1
      ? `${firstPartofGoods.join(', ')} and ${lastPartofGoods} are selected`
      : `${selectedGoods} is selected`;

    return (
      <div className="App">
        <div className="title-wrap">
          <h1>{isGoodsSelected ? title : 'No goods selected'}</h1>
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
        <div className="goods">
          {
            goodsFromServer.map(goods => (
              <>
                <button
                  className="add-button button"
                  type="submit"
                  hidden={selectedGoods.includes(goods)}
                  onClick={() => this.addGoods(goods)}
                >
                  {goods}
                </button>

                <button
                  className="remove-button button"
                  type="submit"
                  hidden={!selectedGoods.includes(goods)}
                  onClick={() => this.removeGoods(goods)}
                >
                  {goods}
                </button>
              </>
            ))
          }
        </div>
      </div>
    );
  }
}
