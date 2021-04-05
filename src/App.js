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
    selected: [],
  };

  clearGoods = () => {
    this.setState({
      selected: [],
    });
  }

  addGood = (good) => {
    this.setState(prevState => ({
      selected: [...prevState.selected, good],
    }));
  }

  removeGood = (goodToRemove) => {
    if (this.state.selected.includes(goodToRemove)) {
      this.setState(prevState => ({
        selected: prevState.selected.filter(
          good => good !== goodToRemove,
        ),
      }));
    }
  }

  listRenderer() {
    const goods = this.state.selected;

    if (!goods.length) {
      return `No goods are selected`;
    }

    if (goods.length === 1) {
      return `${goods} is selected`;
    }

    if (goods.length === 2) {
      return `${goods[0]} and ${goods[1]} are selected`;
    }

    return `${goods.slice(0, -1).join(`, `)}`
    + ` and ${goods.slice(-1)} are selected`;
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="card">
        <div className="card__goods">
          <h2>
            Selected goods:
            {` ${this.listRenderer()}`}
          </h2>
          <p>
            Number of goods selected:
            <span>
              {` ${selected.length}`}
            </span>
          </p>
          <button
            type="button"
            className="card__button"
            onClick={() => this.clearGoods()}
          >
            Clear
          </button>
        </div>
        <ul className="card__products">
          {goodsFromServer.map(good => (
            <div
              className="card__item"
              key={`${Math.random()}`}
            >
              <li>
                {good}
                <div className="products__counter">
                  {selected.filter(
                    item => item === good,
                  ).length || null}
                </div>
              </li>
              <button
                type="button"
                className="card__button card__button-add"
                onClick={() => this.addGood(good)}
              >
                Add
              </button>
              <button
                type="button"
                className="card__button card__button-remove"
                onClick={() => this.removeGood(good)}
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
