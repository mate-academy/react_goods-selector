import React from 'react';
import './App.scss';
import classnames from 'classnames';
import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'No goods selected',
  };

  render(): React.ReactNode {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood}
            {' '}
            is selected
          </h1>

          {this.state.selectedGood && (
            <button
              type="button"
              className="App__clear"
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

        <ul>
          {goodsFromServer.map(goods => (
            <li
              key={goods}
              className={classnames({
                'Good--active': this.state.selectedGood === goods,
              })}
            >
              {goods}
              {this.state.selectedGood !== goods
                ? (
                  <button
                    type="button"
                    className="Good__select"
                    onClick={() => {
                      this.setState({
                        selectedGood: goods,
                      });
                    }}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="Good__remove"
                    onClick={() => {
                      this.setState({
                        selectedGood: 'No goods selected',
                      });
                    }}
                  >
                    Remove
                  </button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
