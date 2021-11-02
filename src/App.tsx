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
  nameGood: string,
  selectedGood: string,
};

class App extends React.Component<{}, State> {
  state = {
    nameGood: 'Jam',
    selectedGood: 'Jam is selected',
  };

  selectedGoodHandler = (good: string) => {
    this.setState(
      {
        nameGood: good,
        selectedGood: `${good} is selected`,
      },
    );
  };

  clearHandler = () => {
    this.setState(
      {
        nameGood: '',
        selectedGood: 'No goods selected',
      },
    );
  };

  render() {
    const { nameGood, selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedGood}
          {' '}
          <button
            type="button"
            onClick={() => {
              this.clearHandler();
            }}
            className={classNames({ hide: nameGood === '' })}
          >
            X
          </button>
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              className="list-item"
              key={good}
            >
              <span
                className={classNames({ selected: nameGood === good })}
              >
                {good}
              </span>
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.selectedGoodHandler(good);
                }}
                className={classNames({ hide: good === nameGood })}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
