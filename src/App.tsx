/* eslint-disable no-param-reassign */

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

class App extends React.Component<{}, { selectedGoods: string[] }> {
  state = {
    selectedGoods: [],
  };

  checkIsInList = (good: string) => (
    this.state.selectedGoods.find(currentGood => currentGood === good)
  );

  makeGoodSelection = (good: string) => (
    this.checkIsInList(good) ? 'goodName selected' : 'goodName'
  );

  changeButtonType = (good: string) => (
    this.checkIsInList(good) ? 'remove' : 'add'
  );

  toggleButtonName = (good: string) => (
    this.checkIsInList(good) ? 'Remove' : 'Add'
  );

  showSelectedGoods = (goods: string[]) => {
    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return ' is selected';
    }

    return ' are selected';
  };

  handleSelectButtonClick = (good: string) => {
    if (this.state.selectedGoods
      .find(currentGood => currentGood === good)) {
      this.setState((prevState) => ({
        selectedGoods:
        prevState.selectedGoods
          .filter(currentGood => currentGood !== good),
      }));
    } else {
      this.setState((prevState) => ({
        selectedGoods: [...prevState.selectedGoods,
          good],
      }));
    }
  };

  makeTitle = () => {
    const { selectedGoods } = this.state;

    const currentTitle = (selectedGoods.slice(0, -1).join(', ') || '')
    + (selectedGoods.length > 1 ? ' and ' : '')
    + (selectedGoods[selectedGoods.length - 1]
      ? selectedGoods[selectedGoods.length - 1] : '')
    + this.showSelectedGoods(selectedGoods);

    return currentTitle;
  };

  changeClearButtonState = () => (this.state.selectedGoods.length === 0
    ? 'hidden' : 'deleteSelection');

  render() {
    return (
      <div className="App">
        {goodsFromServer.map(good => (
          <>
            <div
              className="goodContainer"
              key={good}
            >
              <div
                className={this.makeGoodSelection(good)}
              >
                {good}
              </div>
              <button
                type="button"
                className={this.changeButtonType(good)}
                onClick={() => this.handleSelectButtonClick(good)}
              >
                {this.toggleButtonName(good)}
              </button>
            </div>
          </>
        ))}
        <div className="headerContainer">
          <h1>
            {this.makeTitle()}
          </h1>
          <button
            type="button"
            className={this.changeClearButtonState()}
            onClick={() => {
              this.setState({
                selectedGoods: [],
              });
            }}
          >
            x
          </button>
        </div>
        {goodsFromServer.length}
      </div>
    );
  }
}

export default App;
