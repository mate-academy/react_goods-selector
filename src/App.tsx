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

  addGood = (good:string) => {
    this.setState(state => (
      { selectedGood: [...state.selectedGood, good] }
    ));
  };

  removeGood = (good:string) => {
    this.setState(state => (
      { selectedGood: state.selectedGood.filter(g => g !== good) }
    ));
  };

  generateTitle = (goods:string[]) => {
    return (
      goods.length
        ? (
          <>
            {goods.length > 1
              ? `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are `
              : `${goods.join('')} is `}
            selected
          </>
        )
        : 'No goods selected'
    );
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {this.generateTitle(selectedGood)}
          <button
            className="App__clear-btn"
            type="button"
            onClick={() => {
              this.setState({ selectedGood: [] });
            }}
          >
            X
          </button>
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="App__item"
            >
              {good}
              &nbsp;
              {selectedGood.includes(good)
                ? (
                  <button
                    type="button"
                    className="App__remove-btn"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="App__add-btn"
                    onClick={() => {
                      this.addGood(good);
                    }}
                  >
                    Add
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
