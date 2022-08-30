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

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {selectedGood}
            is selected

            {/* {selectedGood}
             ? {selectedGood} 'is selected'
             : 'No goods selected'} */}
          </h1>

          <button
            type="button"
            className="App__clear"
            onClick={this.clearGood}
          >
            Clear
          </button>
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li>
              <button
                className="Good"
                type="button"
                key={good}
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                    // className='Good--active',
                    // event.classList.add('.Good--active')
                  });
                }}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>

        {/* Put required buttons into each Good */}
        <button
          type="button"
          className="Good__remove"
          onClick={() => {
            // event.classList.remove('.Good--active');
          }}
        >
          Remove
        </button>

        <button
          type="button"
          className="Good__select"
          // onClick={() => {
          //   this.setState({className.add('Good--active')});
          // }}
        >
          Select
        </button>
      </main>
    );
  }
}

/* {selectedGood ? {selectedGood} 'is selected'
            : 'No goods selected' } */

/* <li className="Good">Dumplings</li>
<li className="Good">Carrot</li>
<li className="Good">Eggs</li>
<li className="Good">Ice cream</li>
<li className="Good">Apple</li>
<li className="Good">Bread</li>
<li className="Good">Fish</li>
<li className="Good">Honey</li>
<li className="Good Good--active">Jam</li>
<li className="Good">Garlic</li> */
