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
  title: string,
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    title: 'No goods selected',
    selectedGoods: ['Jam'],
  };

  componentDidMount() {
    const { selectedGoods } = this.state;

    this.setState({
      title: this.getTitle(selectedGoods),
    });
  }

  addWord = (word: string) => {
    this.setState((prevState) => {
      const allSelectedGoods = [...prevState.selectedGoods, word];

      return {
        title: this.getTitle(allSelectedGoods),
        selectedGoods: allSelectedGoods,
      };
    });
  };

  removeWord = (word: string) => {
    this.setState((prevState) => {
      const allSelectedGoods = prevState.selectedGoods
        .filter(el => el !== word);

      return {
        title: this.getTitle(allSelectedGoods),
        selectedGoods: allSelectedGoods,
      };
    });
  };

  removeAll = () => {
    this.setState({
      title: this.getTitle([]),
      selectedGoods: [],
    });
  };

  getTitle = (array: string[]) => {
    switch (array.length) {
      case 0:
        return 'No one product has been selected';
      case 1:
        return `${array[0]} is selected`;
      default:
        return `${array.slice(0, -1).join(', ')} and ${array[array.length - 1]} are selected`;
    }
  };

  render() {
    const { title, selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">{title}</h1>

        <div className="app__list">
          {
            goodsFromServer.map(word => {
              const isSelected = [...selectedGoods].includes(word);

              return (
                <div
                  className={`good ${isSelected && 'good--selected'}`}
                  key={word}
                >
                  <span className="good__word">{word}</span>
                  <button
                    className="good__button"
                    type="button"
                    onClick={() => {
                      return isSelected
                        ? this.removeWord(word)
                        : this.addWord(word);
                    }}
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
