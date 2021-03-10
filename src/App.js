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

function chooseHeader(goods) {
  if (goods.length === 0) {
    return 'No goods selected';
  }

  if (goods.length === 1) {
    return `${goods}  is selected`;
  }

  return `${goods.slice(0, -1).join(', ')}
      and ${goods.slice(-1)} are selected`;
}

class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  selectGood = (good) => {
    if (this.state.selectedGoods.includes(good)) {
      this.setState(prevState => (
        { selectedGoods: prevState.selectedGoods.filter(el => el !== good) }
      ));
    } else {
      this.setState(prevState => (
        { selectedGoods: [...prevState.selectedGoods, good] }
      ));
    }
  }

  removeGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="goods__header">
          {chooseHeader(selectedGoods)}
          {selectedGoods.length > 0
            && (
            <button type="button" onClick={this.removeGoods}>
              X
            </button>
            )}
        </h1>
        <ul className="goods__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'goods__item',
                { 'goods__item--selected': selectedGoods.includes(good) },
              )}

            >
              {good}
              <button
                type="button"
                className="goods__button"
                onClick={() => this.selectGood(good)}
              >
                Add/Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
