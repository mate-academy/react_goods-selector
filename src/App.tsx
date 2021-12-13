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
  selectedGoods: string;
};

class App extends Component<{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  selectHandler = (good: string) => {
    this.setState({ selectedGoods: good });
  };

  clearSelect = () => {
    this.setState({ selectedGoods: '' });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={() => {
            this.clearSelect();
          }}
        >
          X
        </button>

        <h1 className="App__title">
          {selectedGoods
            ? `${selectedGoods} is selected`
            : 'No goods selected'}
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={`App__item ${selectedGoods === good && 'App__item--select'}`}
            >
              <span>{good}</span>
              {this.state.selectedGoods !== good && (
                <button
                  type="button"
                  onClick={() => {
                    this.selectHandler(good);
                  }}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
