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

let select = '';

class App extends React.Component {
  state = {
    selectText: '-',
  }

  clickHandler = (event) => {
    if (select !== '') {
      select.className = 'button';
    }

    this.setState({ selectText: event.target.textContent });

    select = event.target;
    select.className = 'selected';
  };

  handlerClose = () => {
    if (this.state.selectText === '-') {
      return;
    }

    select.className = 'button';

    this.setState({ selectText: '-' });
    select = '';
  }

  render() {
    return (
      <div className="App">
        <h1 className="heading">
          {'Selected good: '}
          {this.state.selectText}
          {this.state.selectText === '-' ? '' : (
            <button
              type="button"
              onClick={this.handlerClose}
              className="close"
            >
              X
            </button>
          )}

        </h1>
        {goodsFromServer.length}

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
            >
              <button
                onClick={this.clickHandler}
                type="button"
                className="button"
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
