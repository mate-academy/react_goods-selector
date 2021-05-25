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
            ? `Selected good: ${values}`
            : 'No goods selected'
          }
          <button
            type="button"
            onClick={() => {
              this.setState({ values: [] });
            }}
          >
            x
          </button>
        </h1>
        <ul>
          {' '}
          { goodsFromServer.map(item => (
            <li className="list__item">
              <span className="list__text">{item}</span>
              {values.includes(item)
                ? (
                  <button
                    type="button"
                    key={item}
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
                    key={item}
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
