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

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => (
    this.setState(prevGood => ({
      selectedGoods: [...prevGood.selectedGoods, good],
    }))
  );

  deleteGood = (good: string) => (
    this.setState(prevGood => ({
      selectedGoods: prevGood.selectedGoods.filter(delGood => delGood !== good),
    }))
  );

  clearSelection = () => (
    this.setState(
      { selectedGoods: [] },
    )
  );

  selectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <p className="App__notes">
          My notes
        </p>
        <h1 className="App__title-goods">
          {this.selectedGoods()}
        </h1>

        {goodsFromServer.map((good) => {
          return (
            <div>
              <li
                key={good}
                className="App__good"
              >
                {good}
                <button
                  type="button"
                  className={classNames('App__button',
                    { 'App__button--selected': selectedGoods.includes(good) })}
                  onClick={selectedGoods.includes(good)
                    ? () => this.deleteGood(good)
                    : () => this.addGood(good)}
                >
                  {selectedGoods.includes(good) ? 'Remove' : 'Selected'}
                </button>
              </li>
            </div>
          );
        })}

        <button
          type="button"
          className="App__clear-button"
          onClick={this.clearSelection}
        >
          Clear All
        </button>
      </div>
    );
  }
}

export default App;
