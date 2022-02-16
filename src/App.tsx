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

type Prop = {
  selectedGoods: string[];
};

class App extends React.Component<{}, Prop> {
  state = {
    selectedGoods: ['Jam'],
  };

  toggle = (good: string) => {
    if (this.state.selectedGoods.includes(good)) {
      this.setState(state => (
        { selectedGoods: [...state.selectedGoods.filter(item => item !== good)] }
      ));
    } else {
      this.setState(state => (
        { selectedGoods: [...state.selectedGoods, good] }
      ));
    }
  };

  createTitle = (goods: string[]) => {
    return (
      goods.length
        ? `${goods.length > 1
          ? `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are selected`
          : `${goods[0]} is selected`}`
        : 'No goods selected'
    );
  };

  cancelSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>Selected good:</h1>
        <p className="App__data-info">{this.createTitle(selectedGoods)}</p>
        <ul className="App__list">
          <button
            type="button"
            className="App__btn-clear"
            onClick={() => {
              this.cancelSelected();
            }}
          >
            Cancel Selected
          </button>
          {goodsFromServer.map(good => {
            return (
              <li
                key={good}
                className={classNames(
                  'App__item',
                  { 'App__item--on': selectedGoods.includes(good) },
                  { 'App__item--off': !selectedGoods.includes(good) },
                )}
              >
                <p>{good}</p>
                <button
                  className="App__btn"
                  type="button"
                  onClick={() => {
                    this.toggle(good);
                  }}
                >
                  {selectedGoods.includes(good) ? '-' : '+'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
