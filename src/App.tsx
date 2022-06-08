import React from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';

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

class App extends React.Component<{}, { selectedGood: string }> {
  state = {
    selectedGood: 'Jam',
  };

  onSelect(item: string) {
    this.setState((prevState) => ({
      ...prevState,
      selectedGood: item,
    }));
  }

  onClear() {
    this.setState((prevState) => ({
      ...prevState,
      selectedGood: '',
    }));
  }

  render() {
    return (
      <div className="App">
        {!this.state.selectedGood.length && <h1>No goods selected</h1>}
        {!!this.state.selectedGood.length && (
          <h1>
            {this.state.selectedGood}
            {' '}
            is selected
            <button
              type="button"
              onClick={this.onClear}
              className="button is-primary is-outlined"
            >
              Clear
            </button>
          </h1>
        )}
        <ul>
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={
                this.state.selectedGood === item ? 'item-active' : 'item'
              }
            >
              {item}
              <button
                type="button"
                onClick={() => this.onSelect(item)}
                className="button is-primary"
              >
                Select
              </button>
              <button
                type="button"
                onClick={this.onClear}
                className="button is-danger"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
