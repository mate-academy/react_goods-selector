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
    value: ['Jam'],
  }

  render() {
    const { value } = this.state;

    return (
      <div className="app">
        {value.length > 0 ? (
          <h1 className="app__title">

            <button
              type="button"
              className="app__clear-button"
              onClick={() => {
                this.setState({ value: [] });
              }}
            >
              X
            </button>

            {`Selected: ${value.map(good => ` ${good}`)}`}
          </h1>
        ) : (
          <h1>No goods selected</h1>
        )}

        <ul className="app__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                value.includes(good) ? 'app__item selected' : 'app__item'
              }
            >
              <button
                type="button"
                className={
                  value.includes(good) ? 'app__button active' : 'app__button'
                }
                onClick={() => {
                  this.setState({ value: [...value, good] });
                }}
              >
                select
              </button>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
