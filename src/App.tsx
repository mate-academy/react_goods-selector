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
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    data: [...goodsFromServer],
    selectedGoods: ['Jam'],
  };

  createSelected() {
    const goods: string[] = this.state.selectedGoods;
    const { length } = this.state.selectedGoods;
    const goodsOut = [...goods];
    const endEl = goodsOut.pop();

    const output = goodsOut.join(', ');

    switch (length) {
      case 0:
        return 'No Selected';

      case 1:
        return `${goods[0]} is selected`;

      default:

        return `${output} and ${endEl} are selected`;
    }
  }

  addWord(word: string) {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, word],
    }));
  }

  removeWord(word: string) {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods.filter(good => good !== word)],
    }));
  }

  checkSameGood(word: string) {
    return (this.state.selectedGoods.includes(word)) || false;
  }

  checkAnyGood() {
    return (this.state.selectedGoods.length > 0) || false;
  }

  render() {
    return (
      <div className="app">
        <div className="app__selectedList">
          <p className="app__selectedList__title">
            Selected good:
          </p>
          <p className="app__selectedList__list">
            {this.createSelected()}
          </p>
          {!this.checkAnyGood() && (
            <button
              type="button"
              className="app__selectedList__non"
            >
              All that you want...
            </button>
          )}
          {this.checkAnyGood() && (
            <button
              type="button"
              className="app__selectedList__clear"
              onClick={() => this.setState({ selectedGoods: [] })}
            >
              X
            </button>
          )}
        </div>

        <div className="app__selectedForm">
          <ul className="app__selectedForm__list">
            {this.state.data.map(good => (
              <li className="app__selectedForm__list__item">
                {`${good}`}
                {(!this.checkSameGood(good)) ? (
                  <button
                    type="button"
                    className="app__selectedForm__list__item__add"
                    onClick={() => this.addWord(good)}
                  >
                    Add
                  </button>
                )
                  : (
                    <button
                      type="button"
                      className="app__selectedForm__list__item__remove"
                      onClick={() => this.removeWord(good)}
                    >
                      Remove
                    </button>
                  )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
