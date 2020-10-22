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
    selected: '',
  }

  selectTodo = (id) => {
    if (this.state.selected.includes(preparedGoods[id].title)) {
      return;
    }

    this.setState(state => ({
      selected: `${state.selected} ${preparedGoods[id].title}`,
    }));
  }

  clearSelected = () => {
    if (document.querySelector('.selected')) {
      document.querySelector('.selected').classList.remove('selected');
    }

    this.setState({
      selected: '',
    });
  }

  deleteSelectedTodo = (event) => {
    event.preventDefault();
    const itemToDelete = event.target.textContent;

    this.setState(state => ({
      selected: state.selected.split(itemToDelete).join(' '),
    }));
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">Selected goods:</h1>
        <h3 className="app__header-items">{this.state.selected}</h3>
        <button
          type="button"
          className="app__button"
          onClick={this.clearSelected}
          onContextMenu={this.deleteSelectedTodo}
        >
          X
        </button>
        <GoodsList
          preparedGoods={preparedGoods}
          selectTodo={this.selectTodo}
          deleteTodo={this.deleteSelectedTodo}
          selected={selected}
        />
      </div>
    );
  }
}

export default App;
