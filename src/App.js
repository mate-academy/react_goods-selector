import React from 'react';
import classNames from 'classnames';
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
    status: '',
  }

  setStatus = (event) => {
    this.setState({ status: event.target.textContent });
  }

  removeStatus = () => {
    this.setState({ status: '' });
  }

  render() {
    const { status } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Selected good: ${status || 'choose item'}`}
        </h1>
        <button
          type="button"
          className="remove-button"
          onClick={this.removeStatus}
        >
          X
        </button>
        <ul className="good-list">
          {goodsFromServer.map(good => (
            <li className="good-item" key={good}>
              <button
                type="button"
                className={classNames({
                  'good-button': true,
                  selected: good === status,
                })}
                onClick={this.setStatus}
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
