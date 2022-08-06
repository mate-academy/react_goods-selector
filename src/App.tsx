import React from 'react';
import './App.scss';
import { nanoid } from 'nanoid';
import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

const preparedGoods = goodsFromServer.map(good => ({
  good,
  id: nanoid(),
}));

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    return (
      <main className="App panel is-primary">
        <header className="App__header panel-heading">
          <h1 className="App__title">
            {`${this.state.selectedGood === '' ? 'No goods'
              : this.state.selectedGood} selected`}
          </h1>
          <button
            type="button"
            className="App__clear button is-danger"
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            Clear
          </button>
        </header>
        <ul className="container">
          {preparedGoods.map(({ good, id }) => {
            const isActive = this.state.selectedGood === good;

            return (
              <li
                key={id}
                className={isActive ? 'Good--active' : 'Good'}
              >
                {good}
                {isActive ? (
                  <button
                    type="button"
                    className="Good__remove button is-warning"
                    onClick={() => {
                      this.setState({ selectedGood: '' });
                    }}
                  >
                    Remove
                  </button>
                )
                  : (
                    <button
                      type="button"
                      className="Good__select button is-success"
                      onClick={() => {
                        this.setState({ selectedGood: good });
                      }}
                    >
                      Select
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}
