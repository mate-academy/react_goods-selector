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
    goods: goodsFromServer,
    selectedGood: null,
    selectedGoods: [],
  }

  getSelectedGoods = () => {
    const { selectedGoods, selectedGood } = this.state;

    if (selectedGoods.length === 1) {
      return `${selectedGood} is selected`;
    }

    return `${selectedGood} are selected`;
  }

  render() {
    const { goods, selectedGood, selectedGoods } = this.state;
    let arr = [];

    return (
      <div className="App">
        <div className="header">
          <h1>
            Selected good:
            {' '}
            {selectedGood ? this.getSelectedGoods() : 'no goods selected'}
          </h1>
          {selectedGood
            && (
              <button
                type="button"
                className="block reset"
                onClick={() => {
                  this.setState({
                    selectedGood: null,
                    selectedGoods: [],
                  });
                }}
              >
                Clear cart
              </button>
            )
          }
        </div>
        <ul>
          {goods.map(product => (
            <li
              key={product}
              className={
                (selectedGoods.includes(product))
                  ? 'selected'
                  : 'notSelected'
              }
            >
              {product}
              <button
                type="submit"
                className={
                  (selectedGoods.includes(product))
                    ? 'hover'
                    : 'block'
                }
                onClick={() => {
                  selectedGoods.push(product);
                  this.setState({ selectedGood: selectedGoods.join(', ') });
                }}
              >
                Add
              </button>

              <button
                type="submit"
                className={
                  (selectedGoods.includes(product))
                    ? 'block'
                    : 'hover'
                }
                onClick={() => {
                  arr = selectedGoods.filter(good => good !== product);
                  this.setState({
                    selectedGood: arr.join(', '),
                    selectedGoods: selectedGoods.length ? arr : null,
                  });
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
