import classNames from 'classnames';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  selectGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  removeHandler = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App has-text-centered">
        { selectedGood !== ''
          ? (
            <>
              <h1 className="title is-2">
                {selectedGood}
                {' '}
                is selected
                <button
                  type="button"
                  className="button is-danger is-light is-outlined"
                  onClick={this.removeHandler}
                >
                  Clear
                </button>
              </h1>

            </>
          )
          : (<h1 className="title is-2">No goods selected</h1>)}

        <ul className="content is-medium content">
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={classNames({ active: selectedGood === good })}
            >
              {good}
              <button
                type="button"
                className={selectedGood === good
                  ? 'button is-danger is-outlined'
                  : 'button is-success is-outlined'}
                onClick={() => {
                  return selectedGood !== good
                    ? this.selectGood(good)
                    : this.removeHandler();
                }}
              >
                {selectedGood === good ? 'Remove' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
