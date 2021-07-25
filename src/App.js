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
    goods: ['Jam'],
  }

  removeGood = (good) => {
    this.setState(prevState => ({
      goods: prevState.goods.filter(value => good !== value),
    }));
  }

  addGood = (good) => {
    this.setState(prevState => ({
      goods: [...prevState.goods, good],
    }));
  }

  strOfGoods = () => {
    const { goods } = this.state;

    switch (goods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `Selected goods: ${goods.join(', ')} is selected`;

      case 2:
        return `Selected goods: ${goods[0]} and ${goods[1]} are selected`;

      default:
        return `Selected goods: ${goods.slice(0, -1).join(', ')} `
        + `and ${goods[goods.length - 1]} are selected`;
    }
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.strOfGoods()}
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li key={good} className="App__list-item">
              {good}
              {goods.includes(good)
                ? (
                  <button
                    className="App__btn-remove"
                    type="button"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    remove
                  </button>
                )
                : (
                  <button
                    className="App__btn-add"
                    type="button"
                    onClick={() => {
                      this.addGood(good);
                    }}
                  >
                    add
                  </button>
                )
              }
            </li>
          ))}
          <button
            className="App__btn-clear"
            type="button"
            onClick={() => {
              this.setState({
                goods: [],
              });
            }}
          >
            CLEAR ALL
          </button>
        </ul>
      </div>
    );
  }
}

export default App;
