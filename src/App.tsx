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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  removeAll = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  addWord = (word: string) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: [...selectedGoods, word],
    });
  };

  removeWord = (word: string) => {
    const { selectedGoods } = this.state;
    const removedElem = [...selectedGoods];

    removedElem.splice(selectedGoods.indexOf(word), 1);
    this.setState({
      selectedGoods: removedElem,
    });
  };

  setTitle = (arr: string[]) => {
    switch (arr.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${arr[0]} is selected`;
      default:
        return `${arr.slice(0, -1).join(', ')} and ${arr[arr.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">{this.setTitle(selectedGoods)}</h1>

        <div className="app__list">
          {
            goodsFromServer.map(word => {
              const isSelected = selectedGoods.includes(word);

              return (
                <div
                  className={`goods-line ${isSelected && 'goods-line--selected'}`}
                  key={word}
                >
                  <span className="goods-line__word">
                    {word}
                  </span>

                  <button
                    className="button"
                    type="button"
                    onClick={() => (
                      isSelected ? this.removeWord(word) : this.addWord(word)
                    )}
                  >
                    {isSelected ? 'Remove' : 'Select'}
                  </button>
                </div>
              );
            })
          }
        </div>

        <button
          type="button"
          onClick={this.removeAll}
          className={
            `button button--clear
            ${selectedGoods.length === 0 && 'button--hide'}`
          }
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
