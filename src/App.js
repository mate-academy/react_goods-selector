import React from 'react';
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
    selectedItems: [],
  };

  cancelItemSelection = () => {
    this.setState({ selectedItems: [] });
  };

  selectItem = (event, item) => {
    const { selectedItems } = this.state;
    let nextSelectedItems = [...selectedItems];

    if ((event.ctrlKey || event.metaKey) && selectedItems.includes(item)) {
      const itemIndex = nextSelectedItems.indexOf(item);

      nextSelectedItems.splice(itemIndex, 1);
    } else if ((event.ctrlKey || event.metaKey) 
    && !selectedItems.includes(item)) {
      nextSelectedItems.push(item);
    } else {
      nextSelectedItems = [item];
    }

    this.setState({ selectedItems: nextSelectedItems });
  };

  render() {
    const { selectedItems } = this.state;

    return (
      <div>
        <h1>
          Selected good: 
          {' '}
          {selectedItems.join(', ')}
          <button
            type="button"
            className={`button cancel-selection ${selectedItems.length > 0 && 'active'}`}
            onClick={this.cancelItemSelection}
          >
            x
          </button>
        </h1>
        
        <div className="goods">
          {goodsFromServer.map(item => (
            <button
              type="button"
              key={item}
              className={`button item ${
                selectedItems.includes(item) && 'selected'
              }`}
              onClick={(e) => {
                this.selectItem(e, item);
              }}
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    );
  }
}

export default App;