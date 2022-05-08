import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  ' Dumplings',
  ' Carrot',
  ' Eggs',
  ' Ice cream',
  ' Apple',
  ' Bread',
  ' Fish',
  ' Honey',
  ' Jam',
  ' Garlic',
];

type State = {
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [goodsFromServer[8]],
  };

  selectGoods = (good: string) => {
    this.setState((state) => {
      return {
        selectedGoods: [...state.selectedGoods, good],
      };
    });
  };

  removeGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          {selectedGoods.length === 0 ? (
            <h1>
              No goods selected
            </h1>
          )
            : (
              <h1>
                {selectedGoods.length === 1 ? `${selectedGoods} is selected` : `${selectedGoods} are selected`}
              </h1>
            )}
          {selectedGoods.length !== 0
            && (
              <button
                type="button"
                className="clearButton"
                onClick={this.removeGoods}
              >
                Clear
              </button>
            )}
        </div>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good} className="item">
              {good}
              {!selectedGoods.some(item => item === good)
              && (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.selectGoods(good);
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
