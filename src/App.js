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
    selectedGoods: [],
  }

  addGood = (good) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  }

  removeGood = (good) => {
    this.setState((state) => {
      const index = state.selectedGoods.indexOf(good);

      if (index !== -1) {
        const newState = [...state.selectedGoods];

        newState.splice(index, 1);

        return {
          selectedGoods: newState,
        };
      }

      return null;
    });
  }

  clearList = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <header className="header">
          <div className="header__container">
            <h1 className="header__title">Selected goods:</h1>
            <div className="header__goods">
              {selectedGoods.join(', ')}
            </div>

            <h2 className="header__count">
              Count of Goods:
              {' - '}
              {selectedGoods.length}
            </h2>

            <button
              className="header__btn"
              type="button"
              onClick={() => {
                this.clearList();
              }}
            >
              ClearList
            </button>
          </div>
        </header>

        <main className="main">
          <ul className="main__list">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={
                  selectedGoods.includes(good)
                    ? 'main__good-item selected'
                    : 'main__good-item'
                }
              >
                <div
                  className="main__good-name"
                >
                  {good}
                </div>
                <button
                  type="button"
                  className="main__good-add main__btn"
                  onClick={(event) => {
                    this.addGood(good, event);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="main__good-remove main__btn"
                  onClick={(event) => {
                    this.removeGood(good, event);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
