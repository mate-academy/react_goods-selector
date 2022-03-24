import React from 'react';
import classNames from 'classnames';
import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings', 'Carrot', 'Eggs',
  'Ice cream', 'Apple', 'Bread',
  'Fish', 'Honey', 'Jam', 'Garlic',
];

type State = {
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [] as string[],
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

    const formattedGoodsList
      = selectedGoods.length === 1
        ? selectedGoods[0]
        : `${selectedGoods.slice(0, -1).join(', ')}`
          + ` and ${selectedGoods.slice(-1)}`;

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
            : `Goods selected: ${formattedGoodsList}`}
        </h1>

        <ul className="App__list">
          {goodsFromServer.map(item => (
            <li className="App__item" key={item}>
              <span
                className={classNames(
                  'App__item-text',
                  { 'App__item-text--active': hasItem(item) },
                )}
              >
                {item}
              </span>

              <button
                className="App__item-button"
                type="button"
                onClick={() => getButtonMethod(item)}
              >
                {getButtonTextContent(item)}
              </button>
            </li>
          ))}
        </ul>

        {selectedGoods.length > 0
          && (
            <button
              className="App__clearButton"
              type="button"
              onClick={this.handleClearButtonClick}
            >
              Clear
            </button>
          )}
      </div>
    );
  }
}
