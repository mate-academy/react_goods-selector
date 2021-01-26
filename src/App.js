import React from 'react';
import classNames from 'classnames';
import './App.scss';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    selectedNames: [],
  }

  toggleSelection = (good) => {
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
  }

  clearSelection = () => {
    this.setState({
      selectedNames: [],
    });
  }

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
            onClick={this.clearSelection}
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
              <span>{good}</span>
              <button
                type="button"
                onClick={() => {
                  this.toggleSelection(good);
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
