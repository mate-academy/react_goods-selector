import React from 'react';
import './App.scss';

class App extends React.Component {
  state = {
    goodsFromServer: [
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
    ],
    selectedGoods: [],
  }

  addItem = (item) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, item],
    }));
  }

  removeItem = (item) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(good => good !== item),
    }));
  }

  clearSelections = () => {
    this.setState({ selectedGoods: [] });
  }

  selectTitle = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')}
    and ${selectedGoods[selectedGoods.length - 1]} are selected`;
  }

  render() {
    const { goodsFromServer, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.selectTitle()}
        </h1>
        <h2>
          {`Selected goods: ${selectedGoods.length}`}
          <button
            className="button"
            hidden={selectedGoods.length === 0}
            type="button"
            onClick={this.clearSelections}
          >
            X
          </button>
        </h2>
        <div className="list">
          {goodsFromServer.map(item => (
            <div key={item} className="list__item">
              <span className={selectedGoods.includes(item) && 'selected'}>
                {item}
              </span>
              <button
                className="button list__button"
                hidden={selectedGoods.includes(item)}
                type="button"
                onClick={() => {
                  this.addItem(item);
                }}
              >
                Add
              </button>
              <button
                className="button list__button"
                type="button"
                hidden={!selectedGoods.includes(item)}
                onClick={() => {
                  this.removeItem(item);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
