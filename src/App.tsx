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

interface State {
  goods: string[];
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    selectedGoods: [],
  };

  select = (good: string) => {
    this.setState(prev => ({
      selectedGoods: [...prev.selectedGoods, good],
    }));
  };

  unselect = (good: string) => {
    this.setState(current => {
      const index = current.selectedGoods.indexOf(good);

      current.selectedGoods.splice(index, 1);

      const result = {
        selectedGoods: current.selectedGoods,
      };

      return result;
    });
  };

  prettyString = (strings: string[]) => {
    const result = [];

    for (let i = 0; i < strings.length; i += 1) {
      if (i === strings.length - 1) {
        result[i] = `and ${strings[i]}`;
      } else if (i === strings.length - 2) {
        result[i] = `${strings[i]} `;
      } else {
        result[i] = `${strings[i]}, `;
      }
    }

    return result.map(item => (<span key={item}>{item}</span>));
  };

  title = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return (
          <h1>No goods selected</h1>
        );
      case 1:
        return (
          <h1>
            {selectedGoods}
            {' is selected'}
          </h1>
        );
      default:
        return (
          <h1>
            {this.prettyString(selectedGoods)}
            {' are selected'}
          </h1>
        );
    }
  };

  buttonSelector = (element: string) => {
    const { selectedGoods } = this.state;

    return (
      !selectedGoods.includes(element)
        ? (
          <button
            type="button"
            onClick={() => {
              this.select(element);
            }}
          >
            Add
          </button>
        )
        : (
          <button
            type="button"
            onClick={() => {
              this.unselect(element);
            }}
          >
            remove
          </button>
        )
    );
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        {this.title()}
        <ul>
          {goods.map((good: string) => {
            const isValid = selectedGoods.includes(good);

            return (
              <li key={good} className={isValid ? 'selectedGood' : ''}>
                {good}
                {this.buttonSelector(good)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
