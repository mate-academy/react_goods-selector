/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
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

const goods = goodsFromServer.map(good => ({
  name: good, isSelected: false,
}));

class App extends React.Component {
  state = {
    selectedGoods: [...goods],
  }

whichGoodsSelected = () => {
  const { selectedGoods } = this.state;
  const toSelect = selectedGoods.filter(el => el.isSelected).map(el => el.name);
  const { length } = toSelect;

  switch (length) {
    case 0: return 'No goods selected';
    case 1: return `${toSelect[0]} is selected`;
    default:
      toSelect[length - 2] = `${toSelect[length - 2]} and ${toSelect[length - 1]}`;
      toSelect.pop();

      return `${toSelect.join(', ')} are selected`;
  }
}

handleClick = (good) => {
  const { selectedGoods } = this.state;

  this.setState(() => selectedGoods.map((el) => {
    if (el.name === good) {
      el.isSelected = !el.isSelected;
    }

    return el;
  }));
}

removeSelection = () => {
  const { selectedGoods } = this.state;

  this.setState(() => selectedGoods.map((el) => {
    el.isSelected = false;

    return el;
  }));
}

render() {
  const { selectedGoods } = this.state;

  return (
    <div className="App">
      <h1>
        {this.whichGoodsSelected()}
        <button
          type="button"
          onClick={() => {
            this.removeSelection();
          }}
        >
          X
        </button>
      </h1>
      {goodsFromServer.length}
      <ul>
        {selectedGoods.map(good => (
          <li
            key={good.name}
            className={good.isSelected ? 'selected' : null}
          >
            {good.name}
            <button
              type="button"
              onClick={() => {
                this.handleClick(good.name);
              }}
            >
              {good.isSelected ? 'Remove' : 'Add'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
}

export default App;
