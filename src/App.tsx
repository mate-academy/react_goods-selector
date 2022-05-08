import React from 'react';
import classNames from 'classnames';
import './App.scss';

class App extends React.Component {
  state = {
    goodsFromServer: [
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
    ],
    selectedGood: 'Jam',
  };

  render() {
    const { goodsFromServer, selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {` ${selectedGood} is selected`}
          { selectedGood !== '' && (
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
            >
              X
            </button>
          )}
        </h1>
        {goodsFromServer.length}
        <ul>
          {goodsFromServer.map(product => (
            <li
              key={product}
              id={product}
              className={classNames({ selected: selectedGood === product })}
            >
              {product}
              { ' - ' }
              { selectedGood !== product && (
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ selectedGood: product });
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
