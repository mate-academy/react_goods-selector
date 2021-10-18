import { Component } from 'react';
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

class App extends Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        </h1>
        <ul className="GoodsList">
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={classNames(
                'GoodsList__item',
                {
                  selected: selectedGood === good,
                },
              )}
            >
              {good}
              <button
                type="button"
                className={classNames(
                  'Button',
                  {
                    hidden: selectedGood === good,
                  },
                )}
                onClick={
                  () => {
                    this.setState({
                      selectedGood: good,
                    });
                  }
                }
              >
                Select
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={classNames(
            'Button',
            'Button--clear',
            {
              hidden: !selectedGood,
            },
          )}
          onClick={
            () => {
              this.setState({
                selectedGood: '',
              });
            }
          }
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
