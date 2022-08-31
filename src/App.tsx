// import { add, words } from 'cypress/types/lodash';
import React from 'react';
import './App.scss';

import goodsFromServer from './goods';

type State = {
  selectedGood: string,
  // className: boolean,
};

// type Props = {
//   goods: goodsFromServer;
// };

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
    // className: false,
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  addClass = (event) => {
    if (event.target.matches('.Good__select')) {
      return;
    }

    event.target.closest('.Good').add.classList('.Good--active');
  };

  // toggler = (event) => {
  //   event.currentTarget.classList.toggle('Good--active');
  // };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood}
            is selected

            {/* {selectedGood}
            ?
            {`${selectedGood}
            is selected
            :
            No goods selected`} */}
          </h1>

        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              className="Good"
              key={good}
            >
              {good}

              <button
                type="button"
                className="Good__select"
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                    // event.classList.toggle('Good--active')
                  });
                }}
              >
                Select
              </button>

              <button
                type="button"
                className="Good__remove"
                onClick={() => {
                  // event.classList.remove('Good--active');
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="App__clear"
          onClick={this.clearGood}
        >
          Clear
        </button>
      </main>
    );
  }
}

/* {selectedGood ? {selectedGood} 'is selected'
            : 'No goods selected' } */
