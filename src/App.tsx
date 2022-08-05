import React from 'react';
import './App.scss';
import classNames from 'classnames';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[];
};

export class App extends React.Component<{ }, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGoods.length
              ? `${selectedGoods
                .join(', ')
                .replace(/,(?=[^,]*$)/, ' and')} is selected`
              : 'No goods selected'}
          </h1>

          {selectedGoods.length !== 0 && (
            <button
              type="button"
              className="App__clear AppButton"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul>
          {goodsFromServer.map(goodItem => (

            <li
              key={goodItem}
              className={classNames(
                'Good',
                {
                  'Good-active': selectedGoods.includes(goodItem),
                },
              )}
            >
              {goodItem}

              <button
                type="button"
                className={classNames(
                  'AppButton',
                  {
                    Good__select: !selectedGoods.includes(goodItem),
                    Good__remove: selectedGoods.includes(goodItem),
                  },
                )}
                onClick={() => {
                  if (!selectedGoods.includes((goodItem))) {
                    selectedGoods.push(goodItem);
                    this.setState({ selectedGoods });
                  } else {
                    selectedGoods.splice(selectedGoods.indexOf(goodItem), 1);
                    this.setState({ selectedGoods });
                  }
                }}
              >
                {selectedGoods.includes(goodItem)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
