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
    selectedGood: 'Jam',
  };

  addGood = (good) => {
    this.setState({
      selectedGood: good,
      isButtonHiden: true,
    });
  }

  removeGood = () => {
    this.setState({
      selectedGood: 'No goods',
      isButtonHiden: true,
    });
  }

  render() {
    const { selectedGood, isButtonHiden } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: - ${selectedGood} selected `}
          <button
            type="button"
            hidden={isButtonHiden}
            onClick={() => {
              this.removeGood();
            }}
          >
            X
          </button>
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good} className={selectedGood === good ? 'active' : ''}>
              {good}
              {' '}
              {good.localeCompare(selectedGood)
                ? (
                  <button
                    type="button"
                    onClick={() => {
                      this.addGood(good);
                    }}
                  >
                    Select
                  </button>
                ) : (
                  ''
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
