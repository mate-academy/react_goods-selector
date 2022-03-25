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

class App extends React.Component< {}, { [key: string]: string[] } > {
  state = {
    selectedGoods: [],
  };

  addGoods = (good: string) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGoods = (good: string) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(item => item !== good),
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected good: ${selectedGoods.length > 0
            ? `${selectedGoods.length === 1
              ? `${selectedGoods} is selected`
              : `${selectedGoods} are selected`}`
            : 'No goods selected'}`}
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
            >
              {good}

              <button
                type="button"
                className={classNames(
                  'item-button',
                  'item-button--add',
                  { hidden: good === selectedGoods.find(el => el === good) },
                )}
                onClick={() => {
                  this.addGoods(good);
                }}
              >
                Add
              </button>

              <button
                type="button"
                className={classNames(
                  'item-button',
                  'item-button--remove',
                  { hidden: good !== selectedGoods.find(el => el === good) },
                )}
                onClick={() => {
                  this.removeGoods(good);
                }}
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
