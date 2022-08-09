import React, { Component } from 'react';
import classNames from 'classnames';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string[],
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    const getTitle = () => {
      if (selectedGood.length > 0 && selectedGood.length <= 1) {
        return `${selectedGood[0]} is selected`;
      }

      if (selectedGood.length >= 2) {
        const firstPart = [...selectedGood];

        firstPart.length -= 1;

        return `${firstPart.join(', ')} and ${selectedGood[selectedGood.length - 1]} is selected`;
      }

      return 'No goods selected';
    };

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {getTitle()}
          </h1>
          <button
            type="button"
            className={
              classNames('App__clear',
                { App__hide: this.state.selectedGood.length === 0 })
            }
            // className="App__clear"
            onClick={() => {
              this.setState({ selectedGood: [] });
            }}
          >
            Clear
          </button>
        </header>

        <ul>
          {goodsFromServer.map(el => (
            <li
              className={
                classNames('Good',
                  { 'Good--active': this.state.selectedGood.includes(el) })
              }
              key={el}
            >
              {el}
              <button
                type="button"
                className="Good__remove"
                onClick={() => {
                  selectedGood.splice(selectedGood.indexOf(el), 1);
                  this.setState({
                    selectedGood,
                  });
                }}
                hidden={!this.state.selectedGood.includes(el)}
              >
                Remove
              </button>

              <button
                type="button"
                className={
                  classNames('Good__select',
                    {
                      'Good__select-hide':
                      this.state.selectedGood.includes(el),
                    })
                }
                // className="Good__select"
                onClick={() => {
                  selectedGood.push(el);
                  this.setState({
                    selectedGood,
                  });
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
