import React from 'react';
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
  'Garlic',
];

type Props = {};
interface State {
  selectedGood: string[];
}

class App extends React.Component<Props, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addGood = (good: string) => (
    this.setState(prevState => ({
      selectedGood: [...prevState.selectedGood, good],
    }))
  );

  clearSelection = () => (
    this.setState({
      selectedGood: [],
    })
  );

  changeStatus = (good: string) => (
    this.state.selectedGood.includes(good) ? 'list__item--active' : ''
  );

  render() {
    const { selectedGood } = this.state;
    const selectedGoods: string = selectedGood.join(', ');

    return (
      <div className="App">
        <h1>
          {this.state.selectedGood.length
            ? `Selected good: ${selectedGoods}`
            : 'No goods selected'}
        </h1>
        {this.state.selectedGood.length
          ? (
            <button
              type="button"
              className="list__clear-button"
              onClick={() => this.clearSelection()}
            >
              X
            </button>
          ) : null}

        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={`list__item ${this.changeStatus(good)}`}
            >
              {good}
              <button
                type="button"
                className="list__button"
                onClick={() => this.addGood(good)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
