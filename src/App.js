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
    selectedGood: goodsFromServer[8],
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <>
        {selectedGood ? (
          <h1>
            Current value is
            {' '}
            {selectedGood}
            <button
              onClick={() => {
                this.setState({ selectedGood: null });
              }}
              type="button"
            >
              x
            </button>
          </h1>
        ) : (
          <h1>No value selected</h1>
        )}
        {goodsFromServer.map(good => (
          <div className={classNames(`goodStyle`, {
            selectedEl: selectedGood === good,
            unselectedEl: selectedGood !== good,
          })}
          >
            {good}
            {
            good !== selectedGood && (
              <button
                key={good}
                className="btn"
                onClick={() => {
                  this.setState({ selectedGood: good });
                }}
                type="button"
              >
                Select
              </button>
            )
          }
          </div>
        ))}
      </>
    );
  }
}

export default App;
