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
    values: [],
  }

  render() {
    const { values } = this.state;

    return (
      <div className="App">
        <h1>
          { values.length > 0
            ? (
              <>
                Selected good:
                {' '}
                {values}
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ values: [] });
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
              {values.includes(item)
                ? (
                  <button
                    type="button"
                    className={values === item ? 'active' : ''}
                    onClick={() => {
                      this.setState({ values: item });
                    }}
                  >
                    +
                  </button>
                )
                : (
                  <button
                    type="button"
                    className={values === item ? 'active' : ''}
                    onClick={() => {
                      this.setState({ values: item });
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
