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
    selectText: '-',
  }

  clickHandler = (event) => {
    this.setState({ selectText: event.target.textContent });
  };

  handlerClose = () => {
    this.setState({ selectText: '-' });
  }

  render() {
    const { selectText } = this.state;

    return (
      <div className="App">
        <h1 className="heading">
          {'Selected good: '}
          {this.state.selectText}
          {this.state.selectText === '-'
            ? null
            : (
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
                className={good === selectText
                  ? 'button selected'
                  : 'button'
                }
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
