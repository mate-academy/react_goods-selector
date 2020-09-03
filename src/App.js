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
    product: ' -',
  }

selectedGoods = (item) => {
  this.setState({
    product: item,
  });
}

render() {
  const { product } = this.state;

  return (
    <div className="app">
      <h1>
        Selected good:
        {product}
      </h1>
      <button
        type="button"
        className="app__resetBtn"
        onClick={() => {
          this.selectedGoods(' -');
        }}
      >
        X
      </button>
      <ul className="goodsList">
        {goodsFromServer.map(item => (
          <li
            key={item}
            className={`
              goodsList__product  ${(product === item)
            ? 'goodsList__product--selected'
            : ''}
            `}
          >
            <button
              type="button"
              onClick={
                () => this.selectedGoods(item)
              }
              className="goodsList__btn"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}
}

export default App;
