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

  addGood = (good) => {
    if (!this.state.selectedItem.includes(good)) {
      this.setState(prevState => (
        { selectedItem: [...prevState.selectedItem, good] }
      ));
    }
  }

  removeGood = (good) => {
    const newList = [...this.state.selectedItem];

    if (newList.includes(good)) {
      newList.splice(newList.indexOf(good), 1);
    }

    this.setState(() => ({ selectedItem: newList }));
  }

  clearAll = () => {
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
          selectedItem={this.state.selectedItem}
        />
      </div>
    );
  }
}

export default App;
