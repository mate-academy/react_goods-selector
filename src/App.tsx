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

type Props = {};

type State = {
  selectedGood: string;
};

class App extends React.Component<Props, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  clearSelect = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1
          className={classNames(
            'title',
            {
              hidden: selectedGood === '',
            },
          )}
        >
          {`${selectedGood} is selected`}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.clearSelect();
          }}
          className={classNames(
            'title__button',
            {
              hidden: selectedGood === '',
            },
          )}
        >
          X
        </button>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'list__item',
                {
                  selected: selectedGood === good,
                },
              )}
            >
              {good}
              <br />
              <button
                type="button"
                onClick={() => {
                  this.selectGood(good);
                }}
                className={classNames(
                  'list__button',
                  {
                    hidden: selectedGood === good,
                  },
                )}
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
