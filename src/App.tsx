import React from 'react';
import './App.scss';
import './list.scss';

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
    let text = '';

    switch (selected.length) {
      case 0:
        text = 'No goods selected';
        break;

      case 1:
        text = `${selected[0]} is selected`;
        break;

      case 2:
        text = `${selected[0]} and ${selected[1]} are selected`;
        break;

      default:
        text = `${selected.slice(0, -1).join(', ')} and ${selected.slice(-1)} are selected`;
        break;
    }

    return text;
  };

  addItem = (item: string) => {
    this.setState((state) => ({
      selected: [...state.selected, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((state) => ({
      selected: state.selected.filter((stateItem) => stateItem !== item),
    }));
  };

  toggleItem = (item: string) => {
    const { selected } = this.state;

    if (selected.includes(item)) {
      this.removeItem(item);
    } else {
      this.addItem(item);
    }
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
      goodsFromServer.map((item) => {
        return (
          <li
            key={item}
            className={`list__item
                  ${selected.includes(item) && 'list__item--selected'}
            `}
          >
            {item}
            <div className="list__buttons">
              <button
                type="button"
                className="list__button"
                onClick={() => {
                  this.toggleItem(item);
                }}
              >
                {selected.includes(item)
                  ? 'Remove'
                  : 'Add'}
              </button>
            </div>
          </li>
        );
      })
    );
  };

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <h1 className="app__listText">{this.headingText()}</h1>
          {this.state.selected.length === 0
            || (
              <>
                <button
                  className="app__cleanerButton"
                  type="button"
                  onClick={() => this.clearSelection()}
                >
                  X
                </button>
              </>
            )}
        </div>
        <ul className="list">
          {this.makeGoodsList()}
        </ul>
        {`Goods in list: ${goodsFromServer.length}`}
      </div>
    );
  }
}
