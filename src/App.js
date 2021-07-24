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
          {goodsFromServer.map((good, i) => (
            <li
              key={Math.random}
              className={
                this.state.selectedGood.includes(good)
                  ? 'selected'
                  : 'notSelected'
                }
            >
              {good}
              <button
                type="button"
                onClick={() => (
                  this.state.selectedGood.includes(good)
                    ? this.deleteGood(good)
                    : this.addGood(good)
                )}
              >
                {this.state.selectedGood.includes(good)
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
