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
    value: null,
  }

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        <h1>
          { value
            ? (
              <>
                Selected good:
                {' '}
                {value}
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ value: null });
                  }}
                >
                  x
                </button>
              </>
            )
            : 'No goods selected'
          }
        </h1>
        <ul>
          {' '}
          { goodsFromServer.map(item => (
            <li key={item} className="list__item">
              <span className="list__text">{item}</span>
              {value === item
                ? (
                  <button
                    type="button"
                    className={classNames({ active: value === item })}
                    onClick={() => {
                      this.setState({ value: item });
                    }}
                  >
                    +
                  </button>
                )
                : (
                  <button
                    type="button"
                    className={classNames({ active: value === item })}
                    onClick={() => {
                      this.setState({ value: item });
                    }}
                  >
                    -
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
