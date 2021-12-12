import { Component } from 'react';
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

type State = {
  selected: string;
};

class App extends Component<{}, State> {
  state = {
    selected: 'Jam',
  };

  handleSelect = (good: string) => {
    this.setState({ selected: good });
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          className={selected ? '' : 'App__hiden'}
          onClick={() => {
            this.setState({ selected: '' });
          }}
        >
          X
        </button>
        <h1 className="App__title">
          {selected
            ? `${selected} is selected`
            : 'No goods selected'}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={`App__item ${selected === good && 'App__item--active'}`}
            >
              <div className="App__span">{good}</div>
              <button
                className="App__btn"
                type="button"
                onClick={() => {
                  this.handleSelect(good);
                }}
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
