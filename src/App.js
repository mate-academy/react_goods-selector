import React, { Component } from 'react';
import './App.scss';

const goodsFromServer = [
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

const goods = goodsFromServer.map(
  (good, index) => ({
    name: good,
    id: index,
  }),
);

class App extends Component {
  state = {
    selectedGoods: [],
  }

  selectGoods = (good) => {
    const { name } = good;
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(name)) {
      const filterGoods = selectedGoods.filter(goodName => goodName !== name);

      this.setState({
        selectedGoods: filterGoods,
      });
    } else {
      this.setState(state => ({
        selectedGoods: [
          ...state.selectedGoods,
          name,
        ],
      }));
    }
  }

  clear = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected good:
          {' '}
          <span className="App__selected-good">
            {this.state.selectedGoods.join(', ')}
          </span>
        </h1>

        <button
          className="App__btn App__btn--clear"
          type="button"
          onClick={this.clear}
        >
          Clear
        </button>

        <div className="App__products">
          {goods.map((good) => {
            let isActive;
            let submit = 'Add';

            if (selectedGoods.includes(good.name)) {
              isActive = 'App--active';
              submit = 'Remove';
            } else {
              isActive = '';
              submit = 'Add';
            }

            return (
              <div
                key={good.id}
                className="App__product"
              >
                <p className={`${isActive}`}>
                  {good.name}
                </p>

                <button
                  className="App__btn"
                  type="submit"
                  onClick={() => {
                    this.selectGoods(good);
                  }}
                >
                  {submit}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
