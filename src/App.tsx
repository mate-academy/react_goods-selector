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

  addWord = (word: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, word],
    }));
  };

  removeWord = (word: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(selected => (selected !== word)),
    }));
  };

  resetList = () => {
    this.setState({ selectedGoods: [] });
  };

  checkSelectedWords = () => {
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

    return message;
  };

  render() {
    return (
      <div className="App">
        <div className="card card__content">
          <h1 className="card-title">
            {this.state.selectedGoods[this.state.selectedGoods.length - 1]}
            {' '}
            {this.checkSelectedWords()}
          </h1>

          <button
            type="button"
            className="card-button"
            onClick={() => {
              this.resetList();
            }}
          >
            X
          </button>
        </div>

        <div className="goods-list">
          {goodsFromServer.map(word => (

            <div className="card card__list-card">
              <div className={this.state.selectedGoods.includes(word) ? 'active_item' : 'item'}>
                <h2 key={word}>{word}</h2>
                <button
                  type="button"
                  className="card-button card-button--range"
                  onClick={() => {
                    this.addWord(word);
                  }}
                >
                  Add
                </button>

                <button
                  type="button"
                  className="card-button card-button--range"
                  onClick={() => {
                    this.removeWord(word);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>

          ))}
        </div>
      </div>
    );
  }
}

export default App;
