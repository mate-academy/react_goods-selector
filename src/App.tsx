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

interface State {
  selectedNames: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedNames: [],
  };

  toggleSelectedItem = (good: string) => {
    this.setState((prevState) => {
      const names = [...prevState.selectedNames];

      if (names.includes(good)) {
        const index = names.indexOf(good);

        names.splice(index, 1);
      } else {
        names.push(good);
      }

      return ({
        selectedNames: names,
      });
    });
  };

  clearAllItems = () => {
    this.setState({
      selectedNames: [],
    });
  };

  render() {
    const { selectedNames } = this.state;

    return (
      <div className="App">
        <h1>
          {
            selectedNames.length < 2
              ? 'Selected good: '
              : 'Selected goods: '
          }
          {
            selectedNames.length
              ? selectedNames.join(', ')
              : '-'
          }
        </h1>

        {selectedNames.length > 0 && (
          <button
            type="button"
            onClick={this.clearAllItems}
          >
            Clear
          </button>
        )}

        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames('list__item', {
                list__item_selected: selectedNames.includes(good),
              })}
            >
              <span className="list__name">{good}</span>
              <button
                type="button"
                className="list__button"
                onClick={() => {
                  this.toggleSelectedItem(good);
                }}
              >
                {
                  selectedNames.includes(good)
                    ? 'Remove'
                    : 'Add'
                }
              </button>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default App;
