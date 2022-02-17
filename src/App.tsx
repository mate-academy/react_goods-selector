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

const classSelect = 'btn btn-large waves-effect waves-light green';
const classUnSelect = 'btn btn-large waves-effect waves-light red';

type State = {
  selectedItems: string[]
};

class App extends React.Component<{}, State> {
  state = {
    selectedItems: ['Jam'],
  };

  addItem = (item: string) => {
    if (!this.state.selectedItems.includes(item)) {
      const newItems = [...this.state.selectedItems, item];

      this.setState({ selectedItems: [...newItems] });
    }
  };

  removeItem = (item: string) => {
    const newItems = [...this.state.selectedItems].filter(prod => prod !== item);

    this.setState({ selectedItems: [...newItems] });
  };

  render() {
    const stating = this.state.selectedItems;
    const selevted = stating.length === 1 ? ''
      : `${[...stating].slice(0, -1).join(', ')} and `;

    const last = stating[stating.length - 1];
    let titleText = '';

    switch (stating.length) {
      case 0:
        titleText = 'No goods selected';
        break;
      case 1:
        titleText = `${last} is selected`;
        break;
      default:
        titleText = `${selevted}${last} are selected`;
    }

    return (
      <div className="App">
        <h1>
          {titleText}
        </h1>
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
                className={classNames(stating.includes(good) && 'active', 'item')}
              >
                <h2>{good}</h2>
                <div>
                  <button
                    type="button"
                    className={classSelect}
                    onClick={() => this.addItem(good)}
                  >
                    add
                  </button>

                  <button
                    type="button"
                    className={classUnSelect}
                    onClick={() => this.removeItem(good)}
                  >
                    remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
