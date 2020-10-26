import React from 'react';
import './App.scss';
import { GoodsList } from './components/goodsList';

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

const preparedGoods = goodsFromServer.map((good, index) => ({
  title: good,
  id: index,
}));

class App extends React.Component {
  state = {
    selected: [''],
  }

  selectTodo = (id, event) => {
    const selectedTodo = preparedGoods[id].title;

    if ((event.metaKey || event.ctrlKey)
      && !this.state.selected.includes(selectedTodo)
    ) {
      this.setState(state => ({
        selected: [...state.selected, selectedTodo],
      }));
    } else if (
      (event.metaKey || event.ctrlKey)
      && this.state.selected.includes(selectedTodo)
    ) {
      this.setState(state => ({
        selected: state.selected.filter(good => good !== selectedTodo),
      }));
    } else if (
      this.state.selected.includes(selectedTodo)) {
      return;
    }

    this.setState({
      selected: [selectedTodo],
    });
  }

  clearSelected = () => {
    this.setState({
      selected: [],
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">Selected goods:</h1>
        <h3 className="app__header-items">{selected.join(', ')}</h3>
        <button
          type="button"
          className="app__button"
          onClick={this.clearSelected}
        >
          X
        </button>
        <GoodsList
          preparedGoods={preparedGoods}
          selectTodo={this.selectTodo}
          selected={selected}
        />
      </div>
    );
  }
}

export default App;
