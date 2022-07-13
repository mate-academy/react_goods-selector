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
  selectedItems: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedItems: ['Jam'],
  };

  changeGoodsList = (item: string) => {
    const { selectedItems } = this.state;

    this.setState({
      selectedItems: selectedItems.includes(item)
        ? selectedItems.filter(selected => selected !== item)
        : [...selectedItems, item],
    });
  };

  setHeader = () => {
    const { selectedItems } = this.state;

    if (!selectedItems.length) {
      return 'No selected goods';
    }

    if (selectedItems.length === 1) {
      return `${selectedItems} is selected`;
    }

    return selectedItems.slice().join(', ');
  };

  removeAll = () => {
    this.setState({ selectedItems: [] });
  };

  render() {
    const { selectedItems } = this.state;

    return (
      <div className="App">
        <h1>
          {this.setHeader()}
          <button
            className={`clearButton ${selectedItems.length === 0 ? 'hidden' : ''}`}
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
                selectedItems.includes(item) ? 'selected' : ''
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
                {selectedItems.includes(item) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
