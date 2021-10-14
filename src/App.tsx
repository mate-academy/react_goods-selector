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
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  selected = (goods: string[]) => {
    if (goods.length === 1) {
      return ` ${goods[0]}`;
    }

    return goods.map(item => (goods.indexOf(item) + 1 !== goods.length
      ? ` ${item}, `
      : ` ${item}`));
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          Selected good:
          {this.selected(selectedGood)}
        </h1>

        {selectedGood.length
          ? (
            <button
              type="button"
              className="button"
              onClick={() => this.setState({ selectedGood: [] })}
            >
              Clear
            </button>
          )
          : ''}

        {goodsFromServer.map(item => (
          <label
            key={item}
            className={selectedGood.includes(item)
              ? 'label label--selected'
              : 'label'}
          >
            {item}

            {selectedGood.includes(item)
              ? ''
              : (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.setState(prevState => ({
                      selectedGood: [...prevState.selectedGood, item],
                    }));
                  }}
                >
                  Select
                </button>
              )}
          </label>
        ))}
      </div>
    );
  }
}

export default App;
