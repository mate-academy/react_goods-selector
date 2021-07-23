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

export class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  clearList = () => {
    this.setState(state => ({
      selectedGoods: [],
    }));
  }

  selectGoods = (good) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  }

  removeGoods = (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== good),
    }));
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {selectedGoods.length <= 0
            ? 'Your goods list empty'
            : `${selectedGoods} are Selected `
          }
        </h1>
        <div className="App__button-wrap">
          <button
            type="button"
            onClick={this.clearList}
            className="App__button-clear"
          >
            Clear
          </button>
        </div>
        <h2 className="App__title-list">
          Please select goods below:
        </h2>
        <ol className="App__list">
          {goodsFromServer.map((good, i) => (
            <li key={good} className="App__item">
              <p className="App__good">
                {`${good}`}
                &#9997;
              </p>
              <button
                className={selectedGoods.includes(good)
                  ? 'App__button--active'
                  : 'App__button--hided'
                }
                type="button"
                onClick={() => (
                  selectedGoods.includes(good)
                    ? this.removeGoods(good)
                    : this.selectGoods(good)
                )}
              >
                {selectedGoods.includes(good) ? 'done ' : 'select' }
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
