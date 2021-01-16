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
    selectedGoods: [],
  };

  handleClick = (e, good) => {
    const { selectedGoods } = this.state;
    let nextSelectedGoods = [...selectedGoods];

    if ((e.ctrlKey || e.metaKey) && selectedGoods.includes(good)) {
      const goodIndex = nextSelectedGoods.indexOf(good);

      nextSelectedGoods.splice(goodIndex, 1);
    } else if ((e.ctrlKey || e.metaKey) && !selectedGoods.includes(good)) {
      nextSelectedGoods.push(good);
    } else {
      nextSelectedGoods = [good];
    }

    this.setState({ selectedGoods: nextSelectedGoods });
  };

  handleDelete = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedGoods.join(', ')}
          <button
            type="button"
            className={`btn btn-close ${selectedGoods.length > 0 && 'active'}`}
            onClick={this.handleDelete}
          >
            X
          </button>
        </h1>
        <div className="goods-list">
          {goodsFromServer.map(good => (
            <button
              type="button"
              key={good}
              className={`btn list-item ${
                selectedGoods.includes(good) && 'selected'
              }`}
              onClick={(e) => {
                this.handleClick(e, good);
              }}
            >
              {good}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
