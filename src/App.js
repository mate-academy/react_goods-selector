import React from 'react';
import './App.scss';
import { List } from './list';

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

const preparedGoods = goodsFromServer.map((item, index) => ({
  id: index,
  name: item,
}));

class App extends React.Component {
  state = {
    selected: [],
  }

  clickHandler = (name) => {
    const { selected } = this.state;
    const listOfProducts = [...selected];

    if (!selected.includes(name)) {
      listOfProducts.push(name);
    } else {
      const productIndex = selected.indexOf(name);

      listOfProducts.splice(productIndex, 1);
    }

    this.setState({
      selected: [...listOfProducts],
    });
  }

  remover = () => {
    this.setState({
      selected: [],
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected goods: ${selected.join(', ')}`}
        </h1>

        <button
          type="button"
          className="App__button"
          onClick={this.remover}
        >
          x
        </button>

        <List
          items={preparedGoods}
          selected={selected}
          clicker={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
