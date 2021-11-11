import React from 'react';
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

interface Good {
  id: string;
  value: string;
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  id: uuidv4(),
  value: good,
}));

interface State {
  selectedGoods: string[],
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  clearSelection = () => this.setState({ selectedGoods: [] });

  addGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: [...selectedGoods, good] });
  };

  removeGood = (selectedGood: string) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: selectedGoods.filter(
        good => good !== selectedGood,
      ),
    });
  };

  formatTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]}`;
    }
  };

  render() {
    const { selectedGoods } = this.state;
    const listOfGoodsToRender = goodsFromServer.map(
      good => {
        const isGoodSelected = selectedGoods.includes(good.value);

        const buttonCallback = isGoodSelected
          ? () => this.removeGood(good.value)
          : () => this.addGood(good.value);

        const buttonTitle = isGoodSelected
          ? 'Remove good'
          : 'Add good';

        const buttonToRender = (
          <button
            className={classNames(
              'App__item-button--add',
              { 'App__item-button--remove': isGoodSelected },
            )}
            type="button"
            onClick={buttonCallback}
          >
            {buttonTitle}
          </button>
        );

        return (
          <li
            className={classNames(
              'App__item--unactive',
              { 'App__item--active': isGoodSelected },
            )}
            key={good.id}
          >
            {good.value}
            {buttonToRender}
          </li>
        );
      },
    );

    return (
      <div className="App">
        <h1 className="App__title">
          Selected good:
          {this.formatTitle()}
        </h1>
        <button
          className="App__clear"
          type="button"
          onClick={this.clearSelection}
        >
          Clear
        </button>
        <ul className="App__list">
          {listOfGoodsToRender}
        </ul>
      </div>
    );
  }
}
