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
    selected: '',
  };

  clickWorker = (item) => {
    this.setState({ selected: item });
  }

  render() {
    const { selected } = this.state;

    return (

      <div className="App">
        <h1>
          {`Selected good: - ${selected}`}

          {selected && (
            <button
              type="button"
              onClick={() => {
                this.clickWorker('');
              }}
            >
              X
            </button>
          )}

        </h1>
        <ul>
          {goodsFromServer.map(item => (
            <li>
              <button
                type="button"
                className={(selected === item && 'selected')}
                key={item}
                onClick={() => {
                  this.clickWorker(item);
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
