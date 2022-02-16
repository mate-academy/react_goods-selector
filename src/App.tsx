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

class App extends React.Component {
  state = {
    data: [...goodsFromServer],
    selectedGoods: ['Jam'],
  };

  createSelected() {
    const goods: string[] = this.state.selectedGoods;
    const { length } = this.state.selectedGoods;
    const goodsOut = [...goods];

    goodsOut.pop();

    const output = goodsOut.join(', ');

    switch (length) {
      case 0:
        return 'No Selected';
      case 1:
        return `${goods[0]} is selected`;
      default:

        return `${output} and ${goods[goods.length - 1]} are selected`;
    }
  }

  addWord(word: string) {
    const arr: string[] = [...this.state.selectedGoods];

    arr.push(word);

    return arr;
  }

  removeWord(word: string) {
    const arr: string[] = [...this.state.selectedGoods];
    const index: number = arr.findIndex((el => el === word));

    arr.splice(index, 1);

    return arr;
  }

  checkSameGood(word: string) {
    const arr: string[] = [...this.state.selectedGoods];

    if (arr.includes(word)) {
      return true;
    }

    return false;
  }

  checkAnyGood() {
    if (this.state.selectedGoods.length > 0) {
      return true;
    }

    return false;
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
                {!this.checkSameGood(good) && (
                  <button
                    type="button"
                    className="app__selectedForm__list__item__add"
                    onClick={
                      () => this.setState({ selectedGoods: this.addWord(good) })
                    }
                  >
                    Add
                  </button>
                )}
                {this.checkSameGood(good) && (
                  <button
                    type="button"
                    className="app__selectedForm__list__item__remove"
                    onClick={
                      () => this.setState({ selectedGoods: this.removeWord(good) })
                    }
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
