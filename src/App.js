import React from 'react';
import './App.scss';
import className from 'classnames';

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
    value: 'Jam',
  }

  render() {
    const { value } = this.state;

    return (
      <div className="app">
        {value ? (
          <h1 className="app__title">
            <button
              type="button"
              className="app__clear-button"
              onClick={() => {
                this.setState({ value: null });
              }}
            >
              X
            </button>
            {`${value} is selected`}
          </h1>
        ) : (
          <h1>No goods selected</h1>
        )}

        <ul className="app__list">
          {goodsFromServer.map(good => (
            <li
              className="app__item"
            >
              <button
                type="button"
                className={
                  className(['app__button', { active: value === good }])
                }
                key={good}
                onClick={() => {
                  this.setState({ value: good });
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
