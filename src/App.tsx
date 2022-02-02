import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

type State = {
  selectedGood: string[],
};

class App extends React.Component {
  state: State = {
    selectedGood: [],
  };

  itemHandler = (item: string) => {
    this.setState((state: State) => {
      // eslint-disable-next-line
      return !this.state.selectedGood.includes(item)
        ? { selectedGood: [...state.selectedGood, item] }
        : { selectedGood: state.selectedGood.filter(x => x !== item) };
    });
  };

  generateTitle = () => {
    switch (this.state.selectedGood.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${this.state.selectedGood[0]} is selected`;
      case 2:
        return `${this.state.selectedGood[0]} and ${this.state.selectedGood[1]} are selected`;
      default:
        return `${this.state.selectedGood.slice(0, -1).join(', ')} and ${this.state.selectedGood.slice(-1)} are selected`;
    }
  };

  handleDelete = (item: string) => {
    this.setState((state: State) => ({
      selectedGood: state.selectedGood.filter(x => x !== item),
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="App__title">
          <h1 className="App__title__goods">
            Selected good:
            {' '}
            {this.generateTitle()}
            {' '}
            {this.state.selectedGood
             && <button className="clear" type="button" onClick={() => this.setState({ selectedGood: '' })}>CLEAR</button>}
          </h1>
        </div>
        <div className="App__goods-container">
          {goodsFromServer.map((item) => (
            <div
              key={item}
              className="App__goods-container__good"
            >
              <div className="App__goods-container__good-item">{item}</div>
              <button
                className="btn"
                type="button"
                onClick={() => this.itemHandler(item)}
              >
                {this.state.selectedGood.includes(item) ? 'Remove' : 'Add'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
