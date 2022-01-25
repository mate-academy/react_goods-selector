import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.min.css';

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
  selected: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selected: [],
  };

  selectItem = (item: string) => {
    this.setState((state) => ({
      selected: [...state.selected, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((state) => ({
      selected: state.selected.filter(el => el !== item),
    }));
  };

  removeItems = () => {
    this.setState({ selected: [] });
  };

  getItems = () => {
    const { selected } = this.state;

    if (selected.length === 1) {
      return `${selected.join()} is selected`;
    }

    return `${selected.join(', ')} are selected`;
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="box">
        <h1 className="title">
          {selected.length !== 0
            ? this.getItems()
            : 'No goods selected'}
          {' '}
          {selected.length !== 0 && (
            <button
              type="button"
              className="button is-danger"
              onClick={this.removeItems}
            >
              X
            </button>
          )}
        </h1>

        <div>
          <ul className="content">
            {goodsFromServer.map(good => (
              <li key={good}>
                <div className="block">
                  <span className={classNames(
                    {
                      'tag is-success is-light': selected.includes(good),
                    },
                  )}
                  >
                    {good}
                  </span>
                  {' '}
                  {selected.includes(good)
                    ? (
                      <button
                        type="button"
                        onClick={() => {
                          this.removeItem(good);
                        }}
                      >
                        Remove
                      </button>
                    )
                    : (
                      <button
                        type="button"
                        onClick={() => {
                          this.selectItem(good);
                        }}
                      >
                        Select
                      </button>
                    )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
