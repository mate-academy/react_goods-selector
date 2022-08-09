import React from 'react';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './goods';

type Good = string;

type State = {
  selectedItem: Good;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedItem: 'Jam',
  };

  selectGood = (item: Good) => {
    this.setState({ selectedItem: item });
  };

  removeGood = () => {
    this.setState({ selectedItem: '' });
  };

  isSelected = (item: Good) => {
    return this.state.selectedItem === item;
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <main className="App panel is-primary">
        <header className="App__header panel-heading">
          <h1 className="App__title">
            {selectedItem
              ? `${selectedItem} is selected`
              : 'No goods selected'}
          </h1>

          {selectedItem && (
            <button
              type="button"
              className="App__clear button is-danger"
              onClick={() => this.removeGood()}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                'Good',
                {
                  'Good--active': selectedItem === good,
                },
              )}
              key={good}
            >
              {good}
              {this.isSelected(good)
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-danger"
                    onClick={() => this.removeGood()}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select button is-primary"
                    onClick={() => this.selectGood(good)}
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
