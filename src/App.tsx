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
  selected: string[];
};

export default class App extends React.Component<{}, State> {
  state = {
    selected: ['Jam'],
  };

  headingText = () => {
    const { selected } = this.state;
    const { length } = selected;
    let text = '';

    switch (true) {
      case length === 1:
        text = `selected ${selected[0]}`;
        break;

      case length === 2:
        text = `${selected[0]} and ${selected[1]} are selected`;
        break;

      case length > 2:
        text = `
        ${selected.join(', ').replace(/,(?=[^,]*$)/, ' and')} are selected
        `;
        break;

      default:
        text = 'No goods selected';
        break;
    }

    return text;
  };

  addItem = (item: string) => {
    this.setState((state) => {
      const { selected } = state;

      if (!selected.includes(item)) {
        return {
          selected: selected.concat(item),
        };
      }

      return state;
    });
  };

  removeItem = (item: string) => {
    this.setState((state) => {
      const { selected } = state;

      if (selected.includes(item)) {
        const itemIndex = state.selected.indexOf(item);

        selected.splice(itemIndex, 1);
      }

      return state;
    });
  };

  clearSelection = () => {
    this.setState((state) => {
      const { selected } = state;

      selected.length = 0;

      return state;
    });
  };

  makeGoodsList = () => {
    const { selected } = this.state;

    return (
      goodsFromServer.map((item) => (
        <li
          key={item}
          className={
            `list__item
            ${selected.includes(item) && 'list__item--selected'}
            `
          }
        >
          {item}
          <div className="list__buttons">
            <button
              type="button"
              className="list__button"
              onClick={() => {
                this.addItem(item);
              }}
            >
              select
            </button>
            <button
              type="button"
              className="list__button"
              onClick={() => {
                this.removeItem(item);
              }}
            >
              remove
            </button>
          </div>
        </li>
      ))
    );
  };

  render() {
    return (
      <div className="App">
        <h1>{this.headingText()}</h1>
        <button
          type="button"
          onClick={() => this.clearSelection()}
        >
          clear list
        </button>
        <ul className="list">
          {this.makeGoodsList()}
        </ul>
        {`Goods in list: ${goodsFromServer.length}`}
      </div>
    );
  }
}
