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

const goods = goodsFromServer.map((item, i) => (
  {
    name: item,
    id: i,
  }
));

class App extends React.Component {
  state = {
    selectedNames: [],
    selectedId: [],
  }

  toggleSelection = (good) => {
    const state = { ...this.state };

    if (this.state.selectedId.includes(good.id)) {
      const index = state.selectedId.indexOf(good.id);

      state.selectedId.splice(index, 1);
      state.selectedNames.splice(index, 1);
      this.setState(state);
    } else {
      state.selectedNames.push(good.name);
      state.selectedId.push(good.id);
      this.setState(state);
    }
  }

  clearSelection = () => {
    this.setState({
      selectedNames: [],
      selectedId: [],
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {this.state.selectedNames.join(', ')}
        </h1>
        {this.state.selectedId.length > 0
        && (
          <button
            type="button"
            onClick={this.clearSelection}
          >
            Clear
          </button>
        )
        }
        <ul className="list">
          {goods.map(good => (
            <li
              key={good.id}
              className={classNames('list__item', {
                selected: this.state.selectedId.includes(good.id),
              })}
            >
              <span>{good.name}</span>
              <button
                type="button"
                onClick={() => {
                  this.toggleSelection(good);
                }}
              >
                Add/Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
