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
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  addWord = (word: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, word],
    }));
  };

  removeWord = (word: string) => {
    this.state.selectedGoods.splice(
      this.state.selectedGoods.indexOf(word), 1,
    );

    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods,
    }));
  };

  resetList = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    let message = '';

    if (this.state.selectedGoods.length === 0) {
      message = 'No goods selected';
    }

    if (this.state.selectedGoods.length === 1) {
      message = '- is selected';
    }

    if (this.state.selectedGoods.length > 1) {
      message = '- are selected';
    }

    return (
      <div className="App">
        <div className="title">
          <h1 className="title__article">
            {this.state.selectedGoods[this.state.selectedGoods.length - 1]}
            {' '}
            {message}
          </h1>

          <button
            type="button"
            className="title__button"
            onClick={() => {
              this.resetList();
            }}
          >
            X
          </button>
        </div>

        <div className="goods-list">
          {this.state.goods.map(word => (

            <div className={this.state.selectedGoods.includes(word) ? 'active_item' : 'item'}>
              <h2 key={word}>{word}</h2>
              <button
                type="button"
                onClick={() => {
                  this.addWord(word);
                }}
              >
                Add
              </button>

              <button
                type="button"
                onClick={() => {
                  this.removeWord(word);
                }}
              >
                Remove
              </button>
            </div>

          ))}
        </div>
      </div>
    );
  }
}

export default App;
