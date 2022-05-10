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

type State = {
  selectedGoods: string[];
};

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGoods = (item: string) => {
    this.setState((prevState) => {
      const result = [...prevState.selectedGoods, item];

      return {
        selectedGoods: result,
      };
    });
  };

  removeGood = (item: string) => {
    this.setState((prevState) => {
      if (prevState.selectedGoods.length === 1) {
        return {
          selectedGoods: [],
        };
      }

      const index = this.state.selectedGoods.indexOf(item);
      const result = [
        ...prevState.selectedGoods.splice(0, index),
        ...prevState.selectedGoods.splice(index),
      ];

      return {
        selectedGoods: result,
      };
    });
  };

  resetSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;
    let renderMessage = 'No goods';

    if (selectedGoods.length > 1) {
      renderMessage = `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are`;
    } else if (selectedGoods.length === 1) {
      renderMessage = `${selectedGoods[0]} is`;
    }

    return (
      <div className="App">
        <h1 className="title">
          {`Selected good: ${renderMessage} selected`}
        </h1>

        <ul className="list">
          {goodsFromServer.map(good => {
            const isActive = this.state.selectedGoods.includes(good);

            return (
              <li key={good} className="list__item">
                {good}
                <button
                  type="button"
                  onClick={isActive
                    ? () => this.removeGood(good)
                    : () => this.addGoods(good)}
                  className="list__button"
                >
                  {isActive ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={this.resetSelected}
          className="list__button"
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
