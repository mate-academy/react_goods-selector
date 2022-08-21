import { add } from 'cypress/types/lodash';
import React from 'react';
import './App.scss';

// import goodsFromServer from './goods';

type State = {
  selectedGood: string,
};

// type Props = {
//   goods: goodsFromServer;
// };

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  saveHandler = () => {
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
            {/* {? {selectedGood} 'is selected'
            : 'No goods selected1' } */}
          </h1>

          <button
            type="button"
            className="App__clear"
            onClick={this.saveHandler}
          >
            Clear
          </button>
        </header>

        <ul>
          <li className="Good">Dumplings</li>
          <li className="Good">Carrot</li>
          <li className="Good">Eggs</li>
          <li className="Good">Ice cream</li>
          <li className="Good">Apple</li>
          <li className="Good">Bread</li>
          <li className="Good">Fish</li>
          <li className="Good">Honey</li>
          <li className="Good Good--active">Jam</li>
          <li className="Good">Garlic</li>
        </ul>

        {/* Put required buttons into each Good */}
        <button
          type="button"
          className="Good__remove is-medium is-primary"
          // onClick={() => {
          //   remove.className('Good--active');
          // }}
        >
          Remove
        </button>

        <button
          type="button"
          className="Good__select"
          // onClick={() => {
          //   this.setState(className.add('Good--active'));
          // }}
        >
          Select
        </button>
      </main>
    );
  }
}
