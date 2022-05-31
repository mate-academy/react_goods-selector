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

type State = {
  currentGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    currentGoods: ['Jam'],
  };

  selectAndRemove(inputGood: string) {
    const newArray = [...this.state.currentGoods];

    if (newArray.includes(inputGood)) {
      const index = newArray.indexOf(inputGood);

      newArray.splice(index, 1);
    } else {
      newArray.push(inputGood);
    }

    return newArray;
  }

  render() {
    const { currentGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {currentGoods.length === 0 && 'No goods selected'}
          {currentGoods.length === 1 && `${currentGoods[0]} is selected`}
          {currentGoods.length === 2 && `${currentGoods[0]} and ${currentGoods[1]} is selected`}
          {currentGoods.length > 2 && `${this.state.currentGoods
            .slice(0, -1)
            .join(', ')} and ${currentGoods[currentGoods.length - 1]} are selected`}
        </h1>

        <button
          type="button"
          onClick={() => {
            this.setState({ currentGoods: [''] });
          }}
        >
          reset
        </button>

        <ul>
          {goodsFromServer.map(good => (
            <li>
              {good}
              <button
                type="button"
                onClick={() => {
                  this.setState({ currentGoods: this.selectAndRemove(good) });
                }}
              >
                {this.state.currentGoods.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>

        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
