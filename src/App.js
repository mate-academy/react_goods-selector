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
    selectedGood: 'Jam is selected',
    good: 'Jam',
    selected: 1,
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {this.state.selectedGood}
          {' '}
          {this.state.selected === 0
            ? ''
            : (
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    selectedGood: 'No goods selected',
                    good: null,
                    selected: 0,
                  });
                }}
              >
                X
              </button>
            )}
        </h1>

        <ul className="list">
          {goodsFromServer.map(good => (
            <li className="item" key={goodsFromServer.indexOf(good)}>
              <div className={good === this.state.good ? 'select' : 'block'}>
                {good}
                {good === this.state.good
                  ? ''
                  : (
                    <button
                      type="button"
                      onClick={() => {
                        this.setState({
                          selectedGood: `${good} is selected`,
                          good,
                          selected: 1,
                        });
                      }}
                    >
                      Select
                    </button>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
