import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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
    isSelected: false,
    selectedGood: '',
  };

  render() {
    let { selectedGood } = this.state;
    const { isSelected } = this.state;

    if (!isSelected) {
      selectedGood = 'No goods selected';
    }

    return (
      <div className="App">
        <div className="App-head">
          <h1 className="App-title">
            {`Selected good: - ${selectedGood}`}
          </h1>
          <button
            className={`
              App-button
              App-button__head
              ${!isSelected && 'App-button__hided'}
            `}
            type="button"
            onClick={() => {
              this.setState({
                selectedGood: '',
                isSelected: false,
              });
            }}
          >
            X
          </button>
        </div>
        <ul className="App-list">
          {goodsFromServer.map((good: string) => (
            <div className="App-list__selected">
              <li
                className={`
                App-list__item
                ${selectedGood === good && 'App-list__item-selected'}
              `}
                key={good}
              >
                {good}
              </li>
              <button
                className={`
                  App-button
                  ${selectedGood === good && 'App-button__hided'}
                `}
                type="button"
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                    isSelected: true,
                  });
                }}
              >
                Select
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
