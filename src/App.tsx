import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  selectedGoods: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  addGood = (good:string) => {
    this.setState((prevState) => {
      return {
        selectedGoods: [...prevState.selectedGoods, good],
      };
    });
  };

  deleteGood = (good:string) => {
    this.setState((prevState) => {
      return {
        selectedGoods: prevState.selectedGoods
          .filter((element:string) => element !== good),
      };
    });
  };

  showSelectedGoods = () => {
    const { selectedGoods } = this.state;
    const multipleItemsEnding = 'are selected';
    const lastItem = selectedGoods.slice(-1);

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    if (selectedGoods.length === 2) {
      return `${selectedGoods[0]} and ${selectedGoods[1]} ${multipleItemsEnding}`;
    }

    return `${selectedGoods.slice(0, -1).join(', ')} 
      and ${lastItem} ${multipleItemsEnding}`;
  };

  clearAllGoods() {
    this.setState({ selectedGoods: [] });
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.selectedGoods.length === 0
            ? 'No goods selected'
            : this.showSelectedGoods()}
        </h1>
        {this.state.selectedGoods.length === 0
          ? null
          : (
            <button
              type="button"
              onClick={() => this.clearAllGoods()}
            >
              X
            </button>
          )}
        <ul className="list">
          {goodsFromServer.map((good:string) => (
            <li key={good} className="list__item">
              <span
                className={classNames('list__item--product', {
                  green: this.state.selectedGoods.includes(good),
                })}
              >
                {good}
              </span>
              <div className="list__item--buttons-container">
                {this.state.selectedGoods.includes(good)
                  ? (
                    <button
                      className="button"
                      type="button"
                      onClick={() => this.deleteGood(good)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      className="button"
                      type="button"
                      onClick={() => this.addGood(good)}
                    >
                      Add
                    </button>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
