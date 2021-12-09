/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

class App extends React.Component<{}, State> {
  state: State = {
    selected: ['Jam'],
  };

  addToSelected = (item:string) => {
    this.setState((state) => (
      { selected: [...state.selected, item] }
    ));
  };

  removeFromSelected = (item:string) => {
    this.setState((state) => (
      { selected: state.selected.filter(del => item !== del) }
    ));
  };

  clearSelected = () => {
    this.setState({ selected: [] });
  };

  createTitle = () => {
    const { selected } = this.state;

    switch (selected.length) {
      case 0: {
        return 'No goods selected';
      }

      case 1: {
        return `${selected[0]} is selected`;
      }

      default: {
        const beforeAnd = selected.slice(0, -1).join(', ');
        const afterAnd = selected.slice(-1);

        return `${beforeAnd} and ${afterAnd} are selected`;
      }
    }
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="app">
        <div className="app__title title">
          <h1 className="title__text">{this.createTitle()}</h1>
          <button
            className="title__btn"
            type="button"
            onClick={this.clearSelected}
            disabled={selected.length === 0}
          >
            Delete all
          </button>
        </div>
        <ul className="app__list list">
          {goodsFromServer.map(item => (
            <li className={classNames('list__item', 'item', { 'list__item--active': selected.includes(item) })}>
              <span className="item__text">{item}</span>
              {selected.includes(item) ? (
                <button
                  className="item__btn item__btn-remove"
                  type="button"
                  onClick={() => (this.removeFromSelected(item))}
                >
                  -
                </button>
              ) : (
                <button
                  className="item__btn item__btn-add"
                  type="button"
                  onClick={() => (this.addToSelected(item))}
                >
                  +
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
