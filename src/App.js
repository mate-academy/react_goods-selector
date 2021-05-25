import React from 'react';
import './App.scss';
// import className from 'classnames';

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
    selectedGood: 'Jam',
  };

  render() {
    const allGoods = [...goodsFromServer];
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {selectedGood ? (
          <h1 className="title">
            <span className="title__text">
              {`${selectedGood} is selected`}
            </span>
            <button
              className="remove-btn"
              type="button"
              onClick={() => {
                this.setState({
                  selectedGood: null,
                });
              }}
            >
              x
            </button>
          </h1>
        ) : (
          <h1>No goods selected</h1>
        )}
        <ul className="list">
          {allGoods.map(good => (
            <li
              className={selectedGood === good
                ? 'list__item_active'
                : 'list__item'
              }
              key={good}
            >
              <span>
                {good}
              </span>
              {selectedGood === good ? (''
              ) : (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.setState({
                      selectedGood: good,
                    });
                  }}
                >
                  Select
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
