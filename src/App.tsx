import React from 'react';
// import classNames from 'classnames';
// import { isPropertySignature } from 'typescript';
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
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  selectGood = (currentGood: string) => {
    this.setState({ selectedGood: currentGood });
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood
            ? (`${selectedGood} is selected`)
            : ('No goods selected')}
        </h1>
        {selectedGood && (
          <>
            Clear selection
            <button
              type="button"
              onClick={this.clearGood}
              className="button__clear"
            >
              X
            </button>
          </>
        )}

        <br />
        <br />
        Goods:
        <br />
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={`list__item ${selectedGood === good
                ? 'list__item--selected'
                : ''
              }`}
            >
              {good}
              {'   '}
              {selectedGood === good
                ? ''
                : (
                  <button type="button" onClick={() => this.selectGood(good)}>
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
