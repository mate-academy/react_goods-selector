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

export class App extends React.Component {
  state = {
    selected: 'nothing',
    prevSelected: null,
    clearButtonVisability: false,
  }

  selection = (event) => {
    this.setState({
      selected: event.target.previousSibling.innerText,
      prevSelected: event.target.parentElement,
      clearButtonVisability: true,
    });

    if (this.state.prevSelected) {
      this.state.prevSelected.classList.remove('selected-item');
    }

    event.target.parentElement.classList.add('selected-item');
  }

  clear = () => {
    this.setState({
      clearButtonVisability: false,
      selected: 'nothing',
    });

    this.state.prevSelected.classList.remove('selected-item');
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {this.state.selected}
        </h1>
        <button
          type="button"
          className="clear-button"
          onClick={this.clear}
          hidden={!this.state.clearButtonVisability}
        >
          clear selected
        </button>
        <ul className="goods-list">
          {
            goodsFromServer
              .map(
                good => (
                  <li key={good} className="list-item">
                    <p>
                      {good}
                    </p>
                    <button
                      type="button"
                      className="select-button"
                      onClick={this.selection}
                    >
                      select it
                    </button>
                  </li>
                ),
              )
          }
        </ul>
      </div>
    );
  }
}

export default App;
