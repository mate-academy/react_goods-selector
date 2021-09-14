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
  if (goods.length === 1) {
    return `${goods[0]} is selected`;
  }

  let arr = [...goods];

  arr.splice(goods.length - 1, 0, 'and');

  arr = arr.map((item, i) => {
    if (i < goods.length - 2) {
      return `${item},`;
    }

    return item;
  });

  return `${arr.join(' ')} are selected`;
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
          {selectedGoods.length !== 0
            ? `${formTitle(selectedGoods)}`
            : 'No goods selected'}
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
            <li>
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
