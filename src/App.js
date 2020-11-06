/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
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
  state = { selected: 'Apple' };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>{`Selected good: ${selected}`}</h1>
        <ul>
          {goodsFromServer.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                margin: '10px 0',
              }}
            >
              <li className={selected === item ? 'selected' : ''}>{item}</li>
              <button
                type="button"
                style={{ margin: '0 5px' }}
                onClick={() => this.setState({ selected: item })}
              >
                Select
              </button>
              <button
                type="button"
                onClick={() =>
                  item === selected && this.setState({ selected: '' })
                }
              >
                X
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
