import React from 'react';
// import { render } from 'react-dom';
import './App.scss';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic'];

type State = {
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: ['Jam'],
  };

  addItem = (item: string) => {
    this.setState((currentState) => ({
      selectedGood: [...currentState.selectedGood, item],
    }));
  };

  removeItem = (item: string) => {
    this.setState((currentState) => ({
      selectedGood: currentState.selectedGood.filter(x => x !== item),
    }));
  };

  clearGoods = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

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

          </h1>

          <ul>
            {goodsFromServer.map((good) => (
              <li
                key={good}
                className={selectedGood.includes(good) ? 'selected' : 'notSelected'}
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
