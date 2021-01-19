import React from 'react';
import classNames from 'classnames';
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
    selectedGoods: [],
  };

  changeGoods = (good, selected) => {
    if (!selected.includes(good)) {
      this.setState({ selectedGoods: [...selected, good] });
    } else {
      const temp = selected.filter(x => x !== good);

      this.setState({ selectedGoods: [...temp] });
    }
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          <span className="App__title">{selectedGoods.join(', ')}</span>
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
                className={classNames('App__item', {
                  'App__item--selected': selectedGoods.includes(good),
                })}
              >
                {good}
              </li>
              <button
                type="button"
                className="App__button"
                onClick={(event) => {
                  this.changeGoods(good, selectedGoods);
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
