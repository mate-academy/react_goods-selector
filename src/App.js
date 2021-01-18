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
  }

  handlerAdd = (item) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, item],
    }));
  }

  handlerRemove = (item) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods
        .filter(selectedItem => selectedItem !== item),
    }));
  }

  handlerClear = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  render() {
    return (
      <div className="App app__card">
        <h1 className="goods__title">
          Selected goods
        </h1>
        <p>
          Your cart: &nbsp;
          <span className="selected__goods">
            {this.state.selectedGoods.length > 0
              ? this.state.selectedGoods.join(', ')
              : 'empty'}
          </span>
        </p>
        <button
          className="clear"
          type="button"
          onClick={this.handlerClear}
        >
          Clear
        </button>
        <ul className="goods__list">
          {goodsFromServer.map(item => (
            <div className="list__item" key={item}>
              <li>{item}</li>
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => (this.handlerAdd(item))}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => (this.handlerRemove(item))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
