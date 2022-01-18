import React from 'react';
import './App.scss';

type Good = string;

const goodsFromServer: Good[] = [
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
  selectedGood: Good
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  goodSelector = (selectedGood: Good) => {
    this.setState({ selectedGood });
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;
    const resetButton = (
      <button
        type="button"
        onClick={() => this.setState({ selectedGood: '' })}
      >
        X
      </button>
    );

    return (
      <div className="App">
        {selectedGood
          ? (
            <>
              <h1>
                {`${selectedGood} is selected`}
                {resetButton}
              </h1>
            </>
          )
          : <h1>No goods selected</h1>}
        {goodsFromServer.length}
        <ul>
          {goodsFromServer.map(good => (
            <>
              <li key={good}>
                {good}
                {selectedGood !== good
                  && (
                    <button
                      type="button"
                      onClick={() => this.goodSelector(good)}
                    >
                      Select
                    </button>
                  )}
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
