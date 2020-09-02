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
    selectedGood: '-',
  }

  selectGood = (event) => {
    this.setState({
      selectedGood: event.target.textContent,
    });
  }

  deleteGood = () => {
    this.setState({
      selectedGood: '-',
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {this.state.selectedGood}
          <button
            type="button"
            onClick={this.deleteGood}
          >
            x
          </button>
        </h1>
        {goodsFromServer.map(good => (
          <button
            key={good}
            type="button"
            onClick={this.selectGood}
            className={
              this.state.selectedGood === good
                ? 'selected'
                : ''
            }
          >
            {good}
          </button>
        ))}

      </div>
    );
  }
}

export default App;
