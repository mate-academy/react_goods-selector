import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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
    selectedItem: [],
  };

  addGood = (event, good) => {
    event.target.closest('li').classList.add('highlight');

    this.setState(prevState => (
      { selectedItem: [...prevState.selectedItem, good] }
    ));
  }

  removeGood = (event, good) => {
    const newList = [...this.state.selectedItem];

    if (newList.filter(item => item === good).length <= 1) {
      event.target.closest('li').classList.remove('highlight');
    }

    if (newList.includes(good)) {
      newList.splice(newList.indexOf(good), 1);
    }

    this.setState(() => ({ selectedItem: newList }));
  }

  clearAll = (event) => {
    const list = [...event.target.nextSibling.children];

    list.forEach((li) => {
      li.classList.remove('highlight');
    });

    this.setState({ selectedItem: [] });
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <div className="App">
        <h1 className="title"> Selected Goods</h1>
        <p className="selected__items">{selectedItem.join(', ')}</p>
        <button
          type="button"
          className="button_clear"
          onClick={this.clearAll}
        >
          ClearAll
        </button>
        <GoodsList
          goods={goodsFromServer}
          addGood={this.addGood}
          removeGood={this.removeGood}
        />
      </div>
    );
  }
}

export default App;
