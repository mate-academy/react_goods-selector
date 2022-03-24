import './App.scss';
import React from 'react';
import classNames from 'classnames';
import { Button } from 'react-bootstrap';

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

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  handleAddButtonClick = (itemToAdd: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, itemToAdd],
    }));
  };

  handleRemoveButtonClick = (itemToRemove: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(item => item !== itemToRemove),
    }));
  };

  handleClearButtonClick = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    const hasItem = (item: string) => (
      selectedGoods.includes(item)
    );

    const formattedGoodsList = selectedGoods.length === 1
      ? selectedGoods[0]
      : (`${selectedGoods.slice(0, -1).join(', ')}`
          + ` and ${selectedGoods.slice(-1)}`);

    const getButtonTextContent = (item: string) => (
      hasItem(item) ? 'Remove' : 'Add'
    );

    const getButtonMethod = (item: string) => (
      hasItem(item)
        ? this.handleRemoveButtonClick(item)
        : this.handleAddButtonClick(item)
    );

    return (
      <div className="App">
        <h1 className="App__title">
          {selectedGoods.length === 0
            ? 'No goods selected'
            : `Goods selected: ${formattedGoodsList.toLowerCase()}`}
        </h1>

        <ul className="App__list">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className="
                App__item
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <span
                className={classNames(
                  'App__item-text',
                  { 'App__item-text--disabled': hasItem(item) },
                )}
              >
                {item}
              </span>

              <Button
                className="App__item-button ms-3"
                onClick={() => getButtonMethod(item)}
              >
                {getButtonTextContent(item)}
              </Button>
            </li>
          ))}
        </ul>

        {selectedGoods.length > 0
          && (
            <Button
              className="App__clearButton"
              onClick={this.handleClearButtonClick}
            >
              Clear
            </Button>
          )}
      </div>
    );
  }
}
