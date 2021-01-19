import React from 'react';
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

class App extends React.Component {
  state = {
    goods: goodsFromServer,
    selectedGoods: [],
  }

  toggleGoods = (good) => {
    if (this.state.selectedGoods.includes(good)) {
      const lastState = [...this.state.selectedGoods];
      const index = lastState.findIndex(el => el === good);

      lastState.splice(index, 1);

      this.setState(state => ({
        selectedGoods: lastState,
      }));
    } else {
      this.setState(state => ({
        selectedGoods: [...state.selectedGoods, good],
      }));
    }
  }

  removeGood = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected goods:
          {' '}
          {selectedGoods.join(', ')}
          {(selectedGoods.length !== 0) && (
            <button
              type="button"
              onClick={this.removeGood}
            >
              X
            </button>
          )}
        </h1>

        <ul>
          {goods.map(good => (
            <>
              <li
                key={good}
                className={selectedGoods.includes(good) ? 'selected' : ''}
              >
                {good}
                <button
                  type="button"
                  onClick={() => {
                    this.toggleGoods(good);
                  }}
                >
                  Add/Remove
                </button>
              </li>
            </>
          ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
