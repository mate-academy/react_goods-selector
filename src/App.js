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
    goods: [...goodsFromServer],
    selectGoods: [],
  };

  changeGoods = (good, sel) => {
    if (!sel.includes(good)) {
      this.setState({ selectGoods: [...sel, good] });
    } else {
      const temp = sel.filter(x => x !== good);

      this.setState({ selectGoods: [...temp] });
    }
  };

  clearGoods = () => {
    this.setState({ selectGoods: [] });
  };

  render() {
    const { goods, selectGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          <span className="App__title">{selectGoods.join(', ')}</span>
        </h1>
        <button
          type="button"
          className="App__button"
          onClick={this.clearGoods}
        >
          X
        </button>
        <ul className="App__list">
          {goods.map(good => (
            <div className="App__wrapper">
              <li
                key={good}
                className={selectGoods.includes(good)
                  ? 'App__item App__item--selected'
                  : 'App__item'}
              >
                {good}
              </li>
              <button
                type="button"
                className="App__button"
                onClick={(event) => {
                  event.preventDefault();
                  this.changeGoods(good, selectGoods);
                }}
              >
                Add/Remove
              </button>
            </div>
          ))}
        </ul>
      </div>

    );
  }
}

export default App;
