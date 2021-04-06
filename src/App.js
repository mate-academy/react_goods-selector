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
    const goods = this.state.selected;

    if (goods.includes(goodToRemove)) {
      goods.splice(
        goods.indexOf(goodToRemove), 1,
      );
      this.setState({
        selected: goods,
      });
    }
  }

  render() {
    const { selected } = this.state;

    const listRenderer = () => {
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
    };

    return (
      <div className="cart">
        <div className="goods">
          <h2 className="goods__string">
            Selected goods:
            {listRenderer()}
          </h2>
          <p className="goods__number">
            Number of goods selected:
            <span className="goods__length">
              {` ${selected.length}`}
            </span>
          </p>
          <button
            type="button"
            className="goods__button"
            onClick={this.clearGoods}
          >
            Clear
          </button>
        </div>
        <ul className="products">
          {goodsFromServer.map(good => (
            <div
              className="products__item"
              key={`${Math.random()}`}
            >
              <li
                className="products__content"
              >
                {good}
                <div className="products__counter">
                  {selected.filter(
                    item => item === good,
                  ).length || null}
                </div>
              </li>
              <button
                type="button"
                className="products__button products__add"
                onClick={() => this.addGood(good)}
              >
                Add
              </button>
              <button
                type="button"
                className="products__button products__remove"
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
