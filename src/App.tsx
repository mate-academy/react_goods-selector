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
  selected: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    selected: goodsFromServer[8],
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          {selected
            ? `${selected} is selected`
            : 'No goods selected'}
        </h1>
        <div className="cross">
          {selected && (
            <button
              type="button"
              onClick={() => this.setState({ selected: '' })}
            >
              X
            </button>
          )}
        </div>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="list__item"
            >
              <span
                className={classNames('good-name', {
                  active: good === selected,
                })}
              >
                {good}
              </span>
              {this.state.selected !== good && (
                <button
                  type="button"
                  className="select-button"
                  onClick={() => {
                    this.setState({ selected: good });
                  }}
                >
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
