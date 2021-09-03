import React from 'react';
import classNames from 'classnames';

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

  selectItem = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {
            selectedGood
              ? `Selected good: - ${selectedGood}`
              : 'No goods selected'
          }
        </h1>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ selectedGood: '' });
          }}
        >
          X
        </button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                classNames('list__good', { list__active: selectedGood === good })
              }
            >
              {good}
              {
                selectedGood === good || (
                  <button
                    type="button"
                    className="list__button"
                    onClick={() => {
                      this.selectItem(good);
                    }}
                  >
                    Select
                  </button>
                )
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
