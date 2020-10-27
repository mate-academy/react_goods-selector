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
    selected: '',
  }

  clickHandler = (event) => {
    this.setState({
      selected: event.target.textContent,
    });
  }

  remover = () => {
    this.setState({
      selected: '',
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {selected}
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
          selected={this.state.selected}
          clicker={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
