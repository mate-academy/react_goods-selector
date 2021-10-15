import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  selected: string;
};

class App extends React.Component<{}, State> {
  state = {
    selected: goodsFromServer[0],
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: ${selected}`}
          <button
            type="button"
            disabled={this.state.selected === 'no selected'}
            onClick={() => {
              this.setState({ selected: 'no selected' });
            }}
          >
            X
          </button>
        </h1>
        <ul>
          {goodsFromServer.map((element: string) => (
            <li className={classNames({ active: element === this.state.selected })}>
              {element}
              <button
                type="button"
                disabled={element === this.state.selected}
                onClick={() => {
                  this.setState({ selected: element });
                }}
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
