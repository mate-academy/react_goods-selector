import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedItem: string
};

export class App extends React.Component<{}, State > {
  state: Readonly<State> = {
    selectedItem: 'Jam',
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <main className="App">
        <div className="App__wrapper">
          <header className="App__header">
            <h1 className="App__title">
              {
                selectedItem.length
                  ? `${selectedItem} is selected`
                  : 'No goods selected'

              }

              {selectedItem
           && (
             <button
               type="button"
               className="App__clear"
               onClick={() => {
                 this.setState({ selectedItem: '' });
               }}
             >
               Clear
             </button>
           )}
            </h1>

          </header>

          <ul className="App__list">
            {goodsFromServer.map(item => (
              <li
                key={item}
                className={classNames('Good',
                  { 'Good--active': selectedItem.includes(item) })}
              >
                <p>
                  {item}
                </p>

                <div className="Good__button-wrapper">
                  <button
                    type="button"
                    className={classNames('Good__select',
                      { 'Good__select--active': selectedItem.includes(item) })}
                    onClick={() => {
                      this.setState({ selectedItem: item });
                    }}
                  >
                    Select
                  </button>

                  <button
                    type="button"
                    className={classNames('Good__remove',
                      { 'Good__remove--active': !selectedItem.includes(item) })}
                    onClick={() => {
                      this.setState({ selectedItem: '' });
                    }}
                  >
                    Remove
                  </button>

                </div>

              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}
