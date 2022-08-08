import classNames from 'classnames';
import React, { Component } from 'react';
import './App.scss';
import 'bulma/css/bulma.min.css';
// import { Button } from 'react-bulma-components';

import goodsFromServer from './goods';

type State = {
  selectedWord: string[],
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedWord: ['Jam'],
  };

  handler = (item: string) => {
    const { selectedWord } = this.state;
    const selectedWordClick = selectedWord.filter(el => el !== item);

    this.setState(() => ({
      selectedWord: (selectedWord.includes(item)
        ? selectedWordClick
        : [...selectedWord, item]),
    }));
  };

  render(): React.ReactNode {
    const { selectedWord } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <button
            type="button"
            className="App__clear button"
            onClick={() => {
              this.setState({
                selectedWord: [],
              });
            }}
          >
            Clear
          </button>

          {
            selectedWord.length
              ? (
                <h1 className="App__title">
                  {`${selectedWord.join(', ')
                    .replace(/,(?=[^,]*$)/, ' and')} is selected`}
                </h1>
              )
              : <h1 className="App__title">No goods selected</h1>
          }
        </header>

        <ul className="list">
          {goodsFromServer.map((item) => (
            <li
              key={item}
              className="list__item"
            >
              {item}
              <button
                type="button"
                className={classNames('Good__select button is-info', {
                  'Good--active is-danger': selectedWord.includes(item),
                })}
                onClick={() => this.handler(item)}
              >
                {selectedWord.includes(item)
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
