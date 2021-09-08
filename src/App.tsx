import React from 'react';
// import { render } from 'react-dom';
import './App.scss';

type State = {
  goodsFromServer: string[],
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goodsFromServer: [
      'Dumplings',
      'Carrot',
      'Eggs',
      'Ice cream',
      'Apple',
      'Bread',
      'Fish',
      'Honey',
      'Jam',
      'Garlic'],
    selectedGood: [],
  };

  addItem = (item: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((state) => ({
      selectedGood: state.selectedGood.filter(x => x !== item),
    }));
  };

  clearGoods = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { goodsFromServer, selectedGood } = this.state;

    return (
      <div className="main">
        <div className="App">
          <h1>
            Selected good:
            <p className="goods">
              {selectedGood.length > 0
                ? <button type="button" className="clearButton" onClick={this.clearGoods}>X</button>
                : ''}
              {selectedGood.join(',')}
            </p>
            {}

          </h1>

          <ul>
            {goodsFromServer.map((good) => (
              <li
                key={good}
                className={selectedGood.find(x => x === good) ? 'selected' : 'notSelected'}
              >
                <p>{good}</p>
                {selectedGood.find((x) => good === x)
                  ? <button type="button" onClick={() => this.removeItem(good)}>Remove</button>
                  : <button type="button" onClick={() => this.addItem(good)}>Select</button>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
