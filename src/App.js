import React from 'react';
import './App.scss';
import uuid from 'uuid';

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
].map(good => ({
  id: uuid.v1(),
  good,
}));

class App extends React.Component {
  state = {
    selectedGood: ['Jam'],
  };

  addGood = (goods) => {
    this.setState(prevState => ({
      selectedGood: [...prevState.selectedGood, goods],
    }));
  }

  deleteGood = (goods) => {
    this.setState(prevState => ({
      selectedGood: [...prevState.selectedGood.filter(item => item !== goods)],
    }));
  }

  makeTitle() {
    switch (this.state.selectedGood.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${this.state.selectedGood} is selected`;
      default:
        return `${this.state.selectedGood.slice(0, -1).join(', ')}
        and ${this.state.selectedGood.slice(-1)} are selected`;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.makeTitle()}
        </h1>
        <button
          type="button"
          onClick={() => this.setState({ selectedGood: [] })}
        >
          Reset
        </button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good.id}
              className={
                this.state.selectedGood.includes(good.good)
                  ? 'selected'
                  : 'notSelected'
                }
            >
              {good.good}
              <button
                type="button"
                onClick={() => (
                  this.state.selectedGood.includes(good.good)
                    ? this.deleteGood(good.good)
                    : this.addGood(good.good)
                )}
              >
                {this.state.selectedGood.includes(good.good)
                  ? 'Delete' : 'Select'
                }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
