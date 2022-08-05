// import { fromNode } from 'cypress/types/bluebird';
import { Component } from 'react';
// import { render } from 'react-dom';
import './App.scss';
import uniqid from 'uniqid';
import 'bulma/css/bulma.min.css';

import classNames from 'classnames';
import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  goods: string[] = [...goodsFromServer];

  render() {
    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            { this.state.selectedGood
              ? `${this.state.selectedGood} is selected`
              : 'No goods selected'}
          </h1>
          {this.state.selectedGood && (
            <button
              type="button"
              className="App__clear button is-danger is-light"
              onClick={() => {
                this.setState({
                  selectedGood: '',
                });
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="content">
          {this.goods.map(good => (
            <li
              key={uniqid()}
              // className="Good"
              className={classNames(
                'Good',
                'level',
                { 'Good--active': this.state.selectedGood === good },
              )}
            >
              {good}
              { good === this.state.selectedGood
                ? (
                  <button
                    type="button"
                    className="Good__remove button is-warning is-light"
                    onClick={() => {
                      this.setState({
                        selectedGood: '',
                      });
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__select button is-success is-light"
                    onClick={() => {
                      this.setState({
                        selectedGood: good,
                      });
                    }}
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
