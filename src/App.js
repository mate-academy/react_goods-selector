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
    values: null,
  }

  render() {
    const { values } = this.state;

    return (
      <div className="container">
        {values ? (
          <h1>
            Current value is
            {values}
            <button
              type="button"
              onClick={() => {
                this.setState({ values: null });
              }}
            >
              X
            </button>
          </h1>
        ) : (
          <h1>No value selected</h1>
        )}
        <ul>
          {goodsFromServer.map(goods => (
            <li>
              <button
                type="button"
                className={`item ${values === goods ? 'active' : ''}`}
                onClick={() => {
                  this.setState({ values: goods });
                }}
              >
                {goods}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
