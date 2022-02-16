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
    selectedGoods: [],
  };

  createSelected() {
    const goods: string[] = this.state.selectedGoods;
    const { length } = this.state.selectedGoods;

    if (length === 0) {
      return 'No Selected';
    }

    if (length === 1) {
      return `${goods[0]} is selected`;
    }

    let output = '';

    for (let i = 0; i < length - 1; i += 1) {
      output += `${goods[i]} , `;
    }

    return `${output.substring(0, output.length - 2)} and ${goods[goods.length - 1]} are selected`;
  }

  addWord(word: string) {
    const arr: string[] = this.state.selectedGoods;

    arr.push(word);

    return arr;
  }

  removeWord(word: string) {
    const arr: string[] = this.state.selectedGoods;
    const index: number = arr.indexOf(word);

    if (index >= 0) {
      arr.splice(index, 1);
    }

    return arr;
  }

  check(word: string) {
    const arr: string[] = this.state.selectedGoods;
    const index: number = arr.indexOf(word);

    if (index >= 0) {
      return true;
    }

    return false;
  }

  check2() {
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
          {!this.check2() && (
            <button
              type="button"
              className="app__selectedList__non"
            >
              Please, all what you want
            </button>
          )}
          {this.check2() && (
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
                {!this.check(good) && (
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
                {this.check(good) && (
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
