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
  selectedGood: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: [goodsFromServer[8]],
  };

  selectedItem = (item: string) => {
    this.setState((prev) => {
      const goods = [...prev.selectedGood];

      if (goods.includes(item)) {
        goods.splice(goods.indexOf(item), 1);
      } else {
        goods.push(item);
      }

      return ({
        selectedGood: goods,
      });
    });
  };

  removeAllItems = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    let text = '';

    if (selectedGood.length === 0) {
      text = 'No goods selected';
    } else if (selectedGood.length === 1) {
      text = `${selectedGood} is selected`;
    } else {
      text = `${selectedGood.join(', ')} are selected`;
    }

    return (
      <div className="App">
        <h1>
          {text}
        </h1>
        <button
          type="button"
          onClick={() => {
            this.removeAllItems();
          }}
        >
          X
        </button>
        <ul className="App-list">
          {goodsFromServer.map((item) => (
            <li
              key={item}
              className={selectedGood.includes(item) ? 'selected' : ''}
            >
              {item}
              <button
                type="button"
                onClick={() => {
                  this.selectedItem(item);
                }}
              >
                {!selectedGood.includes(item) ? 'Add' : 'Remove'}
              </button>
            </li>
          ))}
        </ul>
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
