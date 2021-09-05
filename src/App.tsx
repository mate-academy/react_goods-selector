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

class App extends React.Component<unknown, State> {
  state: State = {
    selectedGoods: [],
  };

  removeGood = (good: string) => (
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(myGood => myGood !== good),
    }))
  );

  addGood = (good: string) => (
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }))
  );

  goodsCreator = (selectedGoods: string[]) => {
    let goods = '';

    if (selectedGoods.length === 1) {
      goods = `is ${selectedGoods[0]}`;
    } else if (selectedGoods.length === 2) {
      goods = `are ${selectedGoods[0]} and ${selectedGoods[1]}`;
    } else {
      goods += 'are ';

      for (let i = 0; i <= selectedGoods.length - 1; i += 1) {
        if (i < selectedGoods.length - 2) {
          goods += selectedGoods[i];
          goods += ', ';
        } else if (i === selectedGoods.length - 2) {
          goods += selectedGoods[i];
          goods += ' and ';
        } else {
          goods += selectedGoods[i];
        }
      }
    }

    return goods;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {
            selectedGoods.length
              ? `Selected goods ${this.goodsCreator(selectedGoods)}`
              : 'No goods selected'
          }
        </h1>

        <ul className="goods">
          {goodsFromServer
            .map((good) => (
              <li className="goods__prop" key={good}>
                <span className="goods__item">
                  {good}
                </span>

                <button
                  type="button"
                  className="goods__button"
                  onClick={() => {
                    return selectedGoods.includes(good)
                      ? this.removeGood(good)
                      : this.addGood(good);
                  }}
                >
                  {selectedGoods.includes(good) ? 'Remove' : 'Add'}
                </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
