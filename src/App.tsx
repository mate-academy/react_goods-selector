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
  goods: string[],
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState(oldState => ({
      selectedGoods: [...oldState.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState(oldState => ({
      selectedGoods: oldState.selectedGoods.filter(elem => elem !== good),
    }));
  };

  displaySelectedGoods = (goods: string[]) => {
    const displayAllExceptLastElement = (array: string[]) => [...array].splice(0, array.length - 1).join(', ');
    const displayLastElement = (array: string[]) => array[array.length - 1];

    switch (goods.length) {
      case (0):
        return 'No goods selected';

      case (1):
        return `${goods[0]} is selected`;

      default:
        return `${displayAllExceptLastElement(goods)} and ${displayLastElement(goods)} are selected`;
    }
  };

  deleteAllGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.displaySelectedGoods(selectedGoods)}
          <button
            type="button"
            className="button__delete"
            onClick={
              () => this.deleteAllGoods()
            }
          >
            Delete selected goods
          </button>
        </h1>
        <ul>
          {goods.map(good => {
            const selected = selectedGoods.includes(good);

            return (
              <>
                <li key={good} className={selected ? 'button__selected' : 'button'}>
                  {good}
                  {!selectedGoods.includes(good)
                    ? <button type="button" onClick={() => this.selectGood(good)}>Select</button>
                    : <button type="button" onClick={() => this.removeGood(good)}>Remove</button>}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
