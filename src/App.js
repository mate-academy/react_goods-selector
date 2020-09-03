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
    selectedGood: '-',
  };

  clickHandler = (event) => {
    this.setState({ selectedGood: event.target.textContent });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Selected good: ${selectedGood}`}
        </h1>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li key={good}>
              <button
                type="button"
                className={classNames({
                  list__item: true,
                  list__item_active: good === selectedGood,
                })}
                onClick={this.clickHandler}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="button"
          onClick={() => {
            this.setState({
              selectedGood: '-',
            });
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default App;
