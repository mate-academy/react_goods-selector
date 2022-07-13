import classNames from 'classnames';
import { Component } from 'react';
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
  selectedGood: string,
};

class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">
          {selectedGood !== ''
            ? (
              <>
                {selectedGood}
                {' '}
                is selected

                <button
                  className="App__header-button"
                  type="button"
                  onClick={() => {
                    this.setState({ selectedGood: '' });
                  }}
                >
                  Clear
                </button>
              </>
            )
            : 'No goods selected'}
        </h1>

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={classNames(
                  'App__list-item',
                  {
                    'App__list-item--active': selectedGood === good,
                  },
                )}
              >
                {good}
                {selectedGood !== good
                  ? (
                    <button
                      className="App__list-button"
                      type="button"
                      onClick={() => {
                        this.setState({ selectedGood: good });
                      }}
                    >
                      Select
                    </button>
                  ) : (
                    <button
                      className="App__list-button"
                      type="button"
                      onClick={() => {
                        this.setState({ selectedGood: '' });
                      }}
                    >
                      Remove
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
