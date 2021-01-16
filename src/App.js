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
    selected: [],
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: - ${selected.length !== 0
            ? selected.join(', ')
            : 'none'}`
          }
          <button
            type="button"
            className={selected.length !== 0 ? 'visible' : null}
            onClick={() => {
              this.setState({ selected: [] });
            }}
          >
            x
          </button>
        </h1>
        <div className="goods-list">
          {goodsFromServer.map(good => (
            <button
              type="button"
              className={selected.includes(good) ? 'active' : null}
              key={good}
              onClick={(e) => {
                if ((e.ctrlKey || e.metaKey)
                  && !selected.includes(e.target.textContent)) {
                  this.setState({ selected: [...selected, good] });
                } else if ((e.ctrlKey || e.metaKey)
                  && selected.includes(e.target.textContent)) {
                  this.setState({ selected: selected.filter(
                    item => (item !== good),
                  ) });
                } else {
                  this.setState({ selected: [good] });
                }
              }}
            >
              {good}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
