import React from 'react';
import './App.scss';
import cn from 'classnames';

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
    selectedGood: '-',
  }

  onSelect = (event) => {
    this.setState({
      selectedGood: event.target.textContent,
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <p className="header">
          <h1>
            Selected good:
            {selectedGood}
          </h1>
          <button
            type="button"
            onClick={() => {
              this.setState({
                selectedGood: '-',
              });
              const cleared = document.querySelector('.selected');

              if (cleared) {
                cleared.className = '';
              }
            }}
          >
            X
          </button>
        </p>
        {goodsFromServer.map(item => (
          <button
            type="button"
            className={cn({ selected: selectedGood === item })}
            onClick={this.onSelect}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}

export default App;
