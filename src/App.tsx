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

const classSelect = 'btn btn-large waves-effect waves-light green';
const classUnSelect = 'btn btn-large waves-effect waves-light red';

type State = {
  selectedItems: string[]
};

class App extends React.Component<{}, State> {
  state = {
    selectedItems: ['Jam'],
  };

  selectItem = (item: string) => {
    let newItems = [...this.state.selectedItems];

    if (newItems.includes(item)) {
      newItems = newItems.filter(prod => prod !== item);
    } else {
      newItems.push(item);
    }

    this.setState({ selectedItems: [...newItems] });
  };

  render() {
    const stating = this.state.selectedItems;
    const selevted = stating.length === 1 ? '' : `${[...stating].slice(0, -1).join(', ')} and `;
    const last = stating[stating.length - 1];

    return (
      <div className="App">
        <h1>{stating.length === 0 ? 'No goods selected' : `${selevted}${last} are selected`}</h1>
        <button
          type="button"
          className={classSelect}
          onClick={() => this.setState({ selectedItems: [] })}
        >
          Remove all
        </button>
        <ul>
          {goodsFromServer.map((good: string) => {
            return (
              <li
                key={good}
                className={stating.includes(good) ? 'item active' : 'item'}
              >
                <h2>{good}</h2>
                <button
                  type="button"
                  className={stating.includes(good) ? classUnSelect : classSelect}
                  onClick={() => this.selectItem(good)}
                >
                  {stating.includes(good) ? 'remove' : 'add'}
                </button>
              </li>
            );
          })}
        </ul>
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
