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
    selectedGoods: [],
  }

  getSelectedGoods = () => {
    const { selectedGoods } = this.state;
    const goodsString = selectedGoods.join(', ');

    if (selectedGoods.length === 0) {
      return 'no goods selected';
    } else if (selectedGoods.length === 1) {
      return `${goodsString} is selected`;
    }

    return `${goodsString} are selected`;
  }

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>
            Selected good:
            {' '}
            {this.getSelectedGoods()}
          </h1>
          {selectedGoods.length > 0
            && (
              <button
                type="button"
                className="block reset"
                onClick={() => {
                  this.setState({
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
                  this.setState(state => ({
                    selectedGoods: [
                      ...state.selectedGoods,
                      product,
                    ]
                  }))
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
                  this.setState({
                    selectedGoods: selectedGoods.filter(good => good !== product),
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
