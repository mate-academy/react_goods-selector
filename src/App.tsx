import React from 'react';
import classNames from 'classnames';
import './App.scss';

type State = {
  selectedGoods: string[],
};

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

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  getSelected = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  getRemoved = (good: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(good)) {
      selectedGoods.splice(selectedGoods.indexOf(good), 1);

      this.setState((state) => ({ selectedGoods: [...state.selectedGoods] }));
    }
  };

  deleteGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;
    let allGoods;

    if (selectedGoods.length === 1) {
      allGoods = `${selectedGoods[0]}`;
    }

    if (selectedGoods.length > 1) {
      const firsts = selectedGoods.slice(0, selectedGoods.length - 1);
      const last = selectedGoods[selectedGoods.length - 1];

      allGoods = `${firsts.join(', ')} and ${last}`;
    }

    return (
      <div className="App">
        <div className="container container__selected">
          <h1>
            {selectedGoods.length > 0
              ? `${allGoods} is selected`
              : 'No goods selected'}
          </h1>
          {selectedGoods.length > 0 && (
            <button
              className="button button__clear"
              type="button"
              onClick={() => {
                this.deleteGoods();
                window.location.reload();
              }}
            >
              X
            </button>
          )}
        </div>
        <div className="goods">
          {goodsFromServer.map(good => (
            <div className="container container__goods">
              <p
                key={good}
                className={classNames('good',
                  { good__selected: selectedGoods.includes(good) })}
              >
                {good}
              </p>
              <div className="buttons">
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.getSelected(good);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.getRemoved(good);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
