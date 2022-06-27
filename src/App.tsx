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

type State = {
  selectedItem: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedItem: ['Jam'],
  };

  changeGoodsList = (item: string) => {
    const { selectedItem } = this.state;

    if (selectedItem.includes(item)) {
      selectedItem.splice(selectedItem.indexOf(item), 1);
    } else {
      selectedItem.push(item);
    }

    this.setState({ selectedItem });
  };

  setHeader = () => {
    const { selectedItem } = this.state;

    if (!selectedItem.length) {
      return 'No selected goods';
    }

    if (selectedItem.length === 1) {
      return `${selectedItem} is selected`;
    }

    return selectedItem.slice().join(', ');
  };

  removeAll = () => {
    this.setState({ selectedItem: [] });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <div className="App">
        <h1>
          {this.setHeader()}
          <button
            className={`clearButton ${selectedItem.length === 0 ? 'hidden' : ''}`}
            type="button"
            onClick={this.removeAll}
          >
            Clear
          </button>
        </h1>
        <ul className="goods-list">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={`goods-list_item goods-list_item--${
                selectedItem.includes(item) ? 'selected' : ''
              }`}
            >
              {item}
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.changeGoodsList(item);
                }}
              >
                {selectedItem.includes(item) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
