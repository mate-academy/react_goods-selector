/* eslint-disable jsx-a11y/click-events-have-key-events */
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

interface Option {
  [key: string]: boolean;
}

type State = {
  goods?: string;
  visited: Option;
};

class App extends React.Component<{}, State> {
  state: State = {
    visited: { Jam: true },
  };

  render() {
    const keys = Object.keys(this.state.visited);

    const performGoods = () => {
      const finn = keys.filter(key => this.state.visited[key]);

      if (finn.length === 1) {
        return `${finn} is selected`;
      }

      if (finn.length === 2) {
        return `${finn.join(' and ')} are selected`;
      }

      if (finn.length > 2) {
        finn[finn.length - 1] = `and ${finn[finn.length - 1]}`;

        return `${finn.join(', ')} are selected`;
      }

      return 'No goods selected';
    };

    const showButton = () => keys.some(key => this.state.visited[key]);

    return (
      <div className="App">
        <h1>
          {performGoods()}
        </h1>
        <button
          type="button"
          className={`button ${(showButton()) ? 'button__visible' : 'button__hide'}`}
          onClick={() => {
            if (Object.keys(this.state.visited).length > 0) {
              this.setState({ visited: {} });
            }
          }}
        >
          X CLEAR X
        </button>
        <ol>
          {goodsFromServer.map(product => {
            const { visited } = this.state;

            return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                key={product}
                onClick={() => {
                  this.setState((prevState) => ({
                    visited: {
                      ...prevState.visited,
                      [product]: !prevState.visited[product],
                    },
                  }));
                }}
                className={`goods ${(visited[product]) ? 'goods__unvisited' : 'goods__visited'}`}
              >
                {product}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
