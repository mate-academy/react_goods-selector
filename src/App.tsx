import React from 'react';
import './App.scss';

interface State {
  selectedGoods: string[];
}

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

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  showGoods = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    const copyOfGoods = [...selectedGoods];
    const lastItem = copyOfGoods.pop();

    return `${copyOfGoods.join(', ')} and ${lastItem} are selected`;
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
  };

  addGood = (goodItem: string) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, goodItem],
    }));
  };

  deleteGood = (goodItem: string) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => (
        item !== goodItem
      )),
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        {selectedGoods.length > 0
          ? (
            <div className="title">
              <h1 className="title__name">
                {this.showGoods()}
              </h1>
              <button
                type="button"
                className="title__btn"
                onClick={this.clear}
              >
                Clear
              </button>
            </div>
          )
          : <h1 className="title__name">No goods selected</h1>}

        <ul className="goods-list">
          {goodsFromServer.map((good) => (
            <li className="goods-list__item" key={good}>
              {good}
              <button
                className="goods-list__btn"
                type="button"
                onClick={() => {
                  if (selectedGoods.includes(good)) {
                    return this.deleteGood(good);
                  }

                  return this.addGood(good);
                }}
              >
                {selectedGoods.includes(good)
                  ? 'Delete'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
