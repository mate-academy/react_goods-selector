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
  selected: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selected: [],
  };

  addItem = (item: string) => {
    this.setState((state) => ({ selected: [...state.selected, item] }));
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' - '}
          {selected.join(', ')}
        </h1>

        {goodsFromServer.map((item) => (
          <div>
            {item}
            <button
              type="button"
              onClick={() => {
                this.addItem(item);
              }}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
