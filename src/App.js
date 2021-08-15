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
  };

  removeGoods = (item) => {
    this.setState((state) => {
      const goodsArray = state.selectedGoods;

      goodsArray.splice(goodsArray.indexOf(item), 1);

      return { selectedGoods: [...goodsArray] };
    });
  }

  addGoods = (item) => {
    this.setState(state => (
      { selectedGoods: [...state.selectedGoods, item] }
    ));
  }

  render() {
    const { selectedGoods } = this.state;
    let textWithGoods = '';

    if (selectedGoods.length) {
      if (selectedGoods.length > 1) {
        textWithGoods = `${
          selectedGoods.slice(0, selectedGoods.length - 1).join(', ')
        } and ${
          selectedGoods[selectedGoods.length - 1]
        } are selected`;
      } else {
        textWithGoods = `${selectedGoods[0]} is selected`;
      }
    } else {
      textWithGoods = 'No goods selected';
    }

    return (
      <div className="App">
        <h1>
          {textWithGoods}
          <button
            type="button"
            onClick={() => this.setState({ selectedGoods: [] })}
          >
            X
          </button>
        </h1>
        {goodsFromServer.length}
        <ul>
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={
                selectedGoods.includes(item) && 'selected'
              }
            >
              {item}
              {selectedGoods.includes(item)
                ? (
                  <button
                    type="button"
                    onClick={() => this.removeGoods(item)}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    onClick={() => this.addGoods(item)}
                  >
                    Add
                  </button>
                )
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
