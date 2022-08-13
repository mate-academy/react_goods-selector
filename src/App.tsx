import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedItem: string[]
};

export class App extends React.Component<{}, State > {
  state: Readonly<State> = {
    selectedItem: ['Jam'],
  };

  selectButton = (item: string) => {
    this.setState((state) => ({
      selectedItem: [
        ...state.selectedItem,
        item,
      ],
    }));
  };

  removeButton = (element: React.MouseEvent) => {
    const goodToRemove
    = element.currentTarget.parentElement?.innerText.split('\n')
      .slice(0, 1).toString();

    this.setState((state) => ({
      selectedItem: [
        ...state.selectedItem,
      ].filter(x => x !== goodToRemove),
    }));
  };

  titleText = () => {
    const { selectedItem } = this.state;

    switch (selectedItem.length) {
      default:
        return `${selectedItem.map((item, i, arr) => {
          if (i === arr.length - 2) {
            return item;
          }

          if (i === arr.length - 1) {
            return `and ${item}`;
          }

          return `${item},`;
        }).join(' ')} are selected`;
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedItem.toString()} is selected`;
      case 2:
        return `${selectedItem.map((item, i, arr) => (
          i === arr.length - 1 ? `and ${item}` : item)).join(' ')} are selected`;
    }
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <main className="App">
        <div className="App__wrapper">
          <header className="App__header">
            <h1 className="App__title">
              {
                this.titleText()
              }

              <button
                type="button"
                className={classNames('App__clear',
                  { 'App__clear--active': !selectedItem.length })}
                onClick={() => {
                  this.setState({ selectedItem: [] });
                }}
              >
                Clear
              </button>
            </h1>

          </header>

          <ul className="App__list">
            {goodsFromServer.map(item => (
              <li
                key={item}
                className={classNames('Good',
                  { 'Good--active': selectedItem.includes(item) })}
              >

                {item}

                <button
                  type="button"
                  className={classNames('Good__select',
                    { 'Good__select--active': selectedItem.includes(item) })}
                  onClick={() => this.selectButton(item)}
                >
                  Select
                </button>

                <button
                  type="button"
                  className={classNames('Good__remove',
                    { 'Good__remove--active': !selectedItem.includes(item) })}
                  onClick={(e) => this.removeButton(e)}
                >
                  Remove
                </button>

              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}
