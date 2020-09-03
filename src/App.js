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
    current: '___',
    previous: null,
  };

  selectHandler = (event) => {
    const li = event.target;
    const { state } = this;

    if (!li.classList.contains('good--selected')) {
      li.classList.add('good--selected');
      state.previous && state.previous.classList.remove('good--selected');
      state.previous = li;
      this.setState({ current: li.innerText });
    } else {
      li.classList.remove('good--selected');
      state.previous = null;
      this.setState({ current: '___' });
    }
  }

  resetHandler = (event) => {
    if (this.state.previous) {
      this.state.previous.classList.remove('good--selected');
      this.state.previous = null;
      this.setState({ current: '___' });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {this.state.current}
        </h1>

        <button type="button" onClick={this.resetHandler}>Clear</button>

        <div>
          {goodsFromServer.map(good => (
            <button
              type="button"
              key={good}
              className="good"
              onClick={this.selectHandler}
            >
              {good}
            </button>
          ))}
        </div>

        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
