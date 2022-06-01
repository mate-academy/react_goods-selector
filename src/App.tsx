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
    const newArrayOfGoods = [...this.state.currentGoods];

    if (newArrayOfGoods.includes(inputGood)) {
      const indexToDelete = newArrayOfGoods.indexOf(inputGood);

      newArrayOfGoods.splice(indexToDelete, 1);
    } else {
      newArrayOfGoods.push(inputGood);
    }

    return newArrayOfGoods;
  }

  render() {
    const { currentGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {currentGoods.length === 0 && 'No goods selected'}
          {currentGoods.length === 1 && `${currentGoods[0]} is selected`}
          {currentGoods.length === 2 && `${currentGoods.join(' and ')} are selected`}
          {currentGoods.length > 2 && `${currentGoods
            .slice(0, -1)
            .join(', ')} and ${currentGoods[currentGoods.length - 1]} are selected`}
        </h1>

        {currentGoods.length !== 0 && (
          <button
            type="button"
            onClick={() => {
              this.setState(() => ({
                currentGoods: [],
              }));
            }}
          >
            Clear
          </button>
        )}

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={currentGoods.includes(good) ? 'selected' : ''}

            >
              {good}
              <button
                type="button"
                onClick={() => {
                  this.setState(() => ({
                    currentGoods: this.selectAndRemove(good),
                  }));
                }}
              >
                {currentGoods.includes(good)
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
