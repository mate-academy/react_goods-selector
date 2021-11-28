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
  selectedGoods: string[]
};

class App extends React.Component<{}, State> {
  state:State = {
    selectedGoods: [],
  };

  selectGood = (good: string) => {
    this.setState((prevState) => {
      this.setState({ selectedGoods: [...prevState.selectedGoods, good] });
    });
  };

  unselectGood = (deletedGood: string) => {
    this.setState((prevState) => {
      this.setState(
        { selectedGoods: [...prevState.selectedGoods.filter(good => good !== deletedGood)] },
      );
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{selectedGoods.length > 0 ? 'Selected good: -' : 'No goods selected'}</h1>

        {selectedGoods
            && selectedGoods.map(good => (
              <h1 key={good}>
                {`${good} is selected`}
                <button
                  type="button"
                  onClick={() => this.unselectGood(good)}
                >
                  X
                </button>
              </h1>
            ))}

        <ul>
          { goodsFromServer.map(good => (
            <li
              key={good}
              className={selectedGoods.includes(good) ? 'selectedGood' : ''}
            >
              {`${good} `}
              {!selectedGoods.includes(good)
                && (
                  <button
                    type="button"
                    onClick={() => this.selectGood(good)}
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
