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

type Good = string;

type State = {
  selectedGoods: Good[],
};

const formTitle = (goods: Good[]) => {
  const arr = [...goods];
  const lastGood = arr.pop();

  switch (goods.length) {
    case 0:
      return 'No goods selected';
    case 1:
      return `${goods[0]} is selected`;
    default:
      return `${arr.join(', ')} and ${lastGood} are selected`;
  }
};

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clearGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  toggleGood = (good: Good) => {
    this.setState((state: State) => {
      if (state.selectedGoods.includes(good)) {
        return {
          selectedGoods: state.selectedGoods.filter(selectedGood => selectedGood !== good),
        };
      }

      return {
        selectedGoods: [good, ...state.selectedGoods],
      };
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {formTitle(selectedGoods)}
          {' '}
          {selectedGoods.length !== 0 && (
            <button
              type="button"
              onClick={this.clearGoods}
            >
              X
            </button>
          )}
        </h1>
        <ul>
          {goodsFromServer.map((good) => (
            <li key={good}>
              {good}
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.toggleGood(good);
                }}
              >
                {selectedGoods.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
