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

const preparedGoods = goodsFromServer.map((item, index) => (
  {
    id: index,
    product: item,
  }
));

class App extends React.Component {
  state = {
    selectedGood: '-',
    prevSelected: null,
  }

  selectHandler = (event, product) => {
    const { prevSelected } = this.state;

    this.setState({ selectedGood: product });

    if (prevSelected !== event.target && prevSelected !== null) {
      prevSelected.classList.remove('selected');
    }

    event.target.classList.add('selected');

    this.setState({ prevSelected: event.target });
  }

  clearHandler = () => {
    this.setState({ selectedGood: '-' });
    this.state.prevSelected.classList.remove('selected');
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>{`Selected good: ${selectedGood.toUpperCase()}`}</h1>
          <button
            type="button"
            className="header__btn"
            onClick={this.clearHandler}
          >
            Clear
          </button>
        </div>
        <div className="goods">
          {preparedGoods.map(item => (
            <button
              key={item.id}
              type="button"
              className="goods__item"
              onClick={event => this.selectHandler(event, item.product)}
            >
              {item.product}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
