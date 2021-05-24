import React, { Component } from 'react';
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

class App extends Component {
  state = {
    selectedGoods: [],
  };

  addItem = (item) => {
    this.setState((prevState) => {
      const { selectedGoods } = prevState;

      if (selectedGoods.includes(item)) {
        const newSelectedGoods = prevState.selectedGoods.filter(good => (
          good !== item
        ));

        return {
          selectedGoods: newSelectedGoods,
        };
      }

      const newSelectedGoods = [...prevState.selectedGoods, item];

      return {
        selectedGoods: newSelectedGoods,
      };
    });
  };

  deleteSelected = () => (
    this.setState({
      selectedGoods: [],
    })
  );

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="container-fluid">
        <div>
          <h1>
            {'Selected goods: '}
          </h1>
          <h2>
            {selectedGoods.join(', ')}
          </h2>
        </div>
        <GoodsList
          items={goodsFromServer}
          selectedGoods={selectedGoods}
          addItem={this.addItem}
        />
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.deleteSelected}
        >
          Clear list
        </button>
      </div>
    );
  }
}

export default App;
