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
    selectedGoods: [],
  }

  selectGood = (good) => {
    if (this.state.selectedGoods.includes(good)) {
      this.setState(state => (
        { selectedGoods: state.selectedGoods.filter(el => el !== good) }
      ));
    } else {
      this.setState(state => (
        { selectedGoods: [...state.selectedGoods, good] }
      ));
    }
  }

  removeGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;
    let header;

    if (selectedGoods.length === 0) {
      header = 'No goods selected';
    } else if (selectedGoods.length === 1) {
      header = `${selectedGoods}  is selected`;
    } else {
      header = `${selectedGoods.slice(0, -1).join(', ')}
       and ${selectedGoods.slice(-1)} are selected`;
    }

    return (
      <div className="App">
        <h1 className="goods__header">
          {header}
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
