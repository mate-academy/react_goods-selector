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
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <>
        {selectedGood ? (
          <h1>
            {`Selected good: - ${selectedGood} is selected`}
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGood: null });
              }}
            >
              x
            </button>
          </h1>
        ) : (
          <h1>No value selected</h1>
        )}

        <ul>
          {goodsFromServer.map(good => (
            <li
              type="square"
              key={good}
            >
              <button
                type="button"
                classNames={classNames({ active: selectedGood === good })}
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                  });
                }}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
