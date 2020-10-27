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
    selected: '',
  }

  targetGood = (good) => {
    this.setState({
      selected: good.name,
    });
  }

  clear = () => {
    this.setState({
      selected: '',
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          Selected good:
          {' '}
          <span className="App__selected-good">
            {this.state.selected}
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

            good.name === this.state.selected
              ? isActive = 'App--active'
              : isActive = '';

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
                    this.targetGood(good);
                  }}
                >
                  Submit
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
