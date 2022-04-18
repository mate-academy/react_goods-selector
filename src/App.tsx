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

type State = {
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  add = (goodToAdd: string) => {
    this.setState((state) => (
      {
        selectedGoods: [...state.selectedGoods, goodToAdd],
      }
    ));
  };

  remove = (goodToRemove: string) => {
    this.setState((state) => (
      {
        selectedGoods: state.selectedGoods.filter(item => item !== goodToRemove),
      }
    ));
  };

  showSelected = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 1:
        return (
          selectedGoods.toString().endsWith('s')
            ? `${selectedGoods} are selected`
            : `${selectedGoods} is selected`
        );

      default:
        return (
          `${selectedGoods.slice(0, -1).join(', ')} and ${[selectedGoods.slice(-1)]} are selected`
        );
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        {selectedGoods.length > 0 ? (
          <h1 className="title">
            {this.showSelected()}
            {' '}
            <button
              type="button"
              className="button"
              onClick={() => {
                this.setState({
                  selectedGoods: [],
                });
              }}
            >
              X
            </button>
          </h1>
        ) : (
          <h1 className="title">No goods selected</h1>
        )}
        <ul>
          {goodsFromServer.map((item) => (
            <li
              key={item}
              className="good"
            >
              {item}
              {selectedGoods.includes(item) ? (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.remove(item);
                  }}
                >
                  -
                </button>
              ) : (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.add(item);
                  }}
                >
                  +
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
