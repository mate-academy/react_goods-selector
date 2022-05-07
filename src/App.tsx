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
  title: string;
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    title: 'No goods selected',
    selectedGoods: ['Jam'],
  };

  componentDidMount() {
    const { selectedGoods } = this.state;

    this.setState({
      title: this.setTitle(selectedGoods),
    });
  }

  removeAll = () => {
    this.setState({
      title: this.setTitle([]),
      selectedGoods: [],
    });
  };

  addWord = (word: string) => {
    const { selectedGoods } = this.state;
    const newSelectedGoods = [...selectedGoods, word];

    this.setState({
      title: this.setTitle(newSelectedGoods),
      selectedGoods: newSelectedGoods,
    });
  };

  removeWord = (word: string) => {
    const { selectedGoods } = this.state;
    const removedElem = [...selectedGoods];

    removedElem.splice(selectedGoods.indexOf(word), 1);
    this.setState({
      title: this.setTitle(removedElem),
      selectedGoods: removedElem,
    });
  };

  setTitle = (arr: string[]) => {
    if (arr.length === 0) {
      return 'No goods selected';
    }

    if (arr.length === 1) {
      return `${arr[0]} is selected`;
    }

    const tempTitle = arr.join(', ');
    const lastIndex = tempTitle.lastIndexOf(',');

    return `${tempTitle.slice(0, lastIndex)} and ${tempTitle.slice(lastIndex + 1)} is selected`;
  };

  render() {
    const { title, selectedGoods } = this.state;

    return (
      <div className="app">
        <h1>{title}</h1>

        <div className="app__list">
          {
            goodsFromServer.map(word => {
              const isSelected = selectedGoods.includes(word);

              return (
                <div
                  className={
                    `goods-line ${isSelected && 'goods-line--selected'}`
                  }
                  key={word}
                >
                  <span className="goods-line__word">
                    {word}
                  </span>

                  <button
                    className="button"
                    type="button"
                    onClick={() => {
                      return isSelected
                        ? this.removeWord(word)
                        : this.addWord(word);
                    }}
                  >
                    {
                      isSelected
                        ? 'Remove'
                        : 'Select'
                    }
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
