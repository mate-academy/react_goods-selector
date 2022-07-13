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
  status: string,
};

class App extends Component<{}, State> {
  state = {
    status: 'Jam',
  };

  render() {
    const { status } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">
          {status !== ''
            ? (
              <>
                {status}
                {' '}
                is selected

                <button
                  className="App__header-button"
                  type="button"
                  onClick={() => {
                    this.setState({ status: '' });
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
                    'App__list-item--active': status === good,
                  },
                )}
              >
                {good}
                {status !== good
                  ? (
                    <button
                      className="App__list-button"
                      type="button"
                      onClick={() => {
                        this.setState({ status: good });
                      }}
                    >
                      Select
                    </button>
                  ) : (
                    <button
                      className="App__list-button"
                      type="button"
                      onClick={() => {
                        this.setState({ status: '' });
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
