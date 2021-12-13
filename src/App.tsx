import React from 'react';
import './App.scss';
// import classNames from 'classnames';

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

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: 'Jam',
  };

  makeSelection = (good: string) => {
    this.setState({ selectedGoods: good });
  };

  clearSelection = () => {
    this.setState({ selectedGoods: '' });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">

        <h1 className="App__title">
          {selectedGoods
            ? `${selectedGoods} is selected`
            : 'No goods selected'}
        </h1>

        <button
          type="button"
          onClick={() => {
            this.clearSelection();
          }}
        >
          CLEAR THE LIST
        </button>

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
                    this.makeSelection(good);
                  }}
                >
                  Add
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
