import React from 'react';
import classNames from 'classnames';
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
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [],
  };

  listingOfSelectedGoods = (selectedGoods: string[]) => {
    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    const goodsList = selectedGoods.join(', ');
    const index = goodsList.lastIndexOf(',');

    return `${goodsList.slice(0, index)} and ${goodsList.slice(index + 2)} are selected `;
  };

  addGoodHandler = (good: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.concat(good),
    }));
  };

  removeGoodHandler = (good: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(item => item !== good),
    }));
  };

  clearHandler = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selectedGoods.length === 0 ? 'No goods selected' : this.listingOfSelectedGoods(selectedGoods)}
          {' '}
          <button
            type="button"
            onClick={this.clearHandler}
            className={classNames({ hide: selectedGoods.length === 0 })}
          >
            X
          </button>
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li className="list-item" key={good}>
              <span className={classNames({ selected: selectedGoods.some(item => item === good) })}>
                {good}
              </span>
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.addGoodHandler(good);
                }}
                className={classNames({ hide: selectedGoods.some(item => item === good) })}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  this.removeGoodHandler(good);
                }}
                className={classNames({ hide: selectedGoods.every(item => !(item === good)) })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
