/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: '',
  };

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">

            {this.state.selectedGood
              ? `${this.state.selectedGood} is selected`
              : 'No goods selected'}
          </h1>

          <button
            type="button"
            className={this.state.selectedGood === ''
              ? 'App__clear'
              : 'App__clear--visible'}
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            Clear
          </button>
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li className={
              this.state.selectedGood.includes(good)
                ? 'Good--active'
                : 'Good'
            }
            >
              {good}
              <button
                type="button"
                className={
                  this.state.selectedGood.includes(good)
                    ? 'Good__select'
                    : 'Good__select--visible'
                }
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                  });
                }}
              >
                Select
              </button>

              <button
                type="button"
                className={
                  this.state.selectedGood.includes(good)
                    ? 'Good__remove--visible'
                    : 'Good__remove'
                }
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
