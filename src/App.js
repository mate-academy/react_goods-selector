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
    goods: [],
  }

  addGood = (product) => {
    const { goods } = this.state;

    this.setState({
      goods: [...goods, product],
    });
  }

  deleteGood = (product) => {
    const { goods } = this.state;

    this.setState({
      goods: goods.filter(good => good !== product),
    });
  }

  deleteAllGoods = () => {
    this.setState({
      goods: [],
    });
  }

  checkGoods = () => {
    const { goods } = this.state;

    if (goods.length < 1) {
      return `No goods selected`;
    }

    if (goods.length > 1) {
      const list = goods.slice(0, -1).join(', ');

      return `${list} and ${goods[goods.length - 1]} are selected`;
    }

    return `${goods[0]} is selected`;
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1><i>{this.checkGoods()}</i></h1>
        <div>
          Selected goods:
          {goods.length}
        </div>
        <button
          type="button"
          className="button button__remove"
          onClick={this.deleteAllGoods}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <li className="table" key={good}>
              <div>
                <h2>{good}</h2>
                <button
                  type="button"
                  className="button button__add"
                  onClick={() => {
                    this.addGood(good);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="button button__remove"
                  onClick={() => {
                    this.deleteGood(good);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default App;
