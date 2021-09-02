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

interface State {
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  addToSelectedGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeToSelectedGood = (good: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(good)) {
      const index = selectedGoods.lastIndexOf(good);

      selectedGoods.splice(index, 1);
    }

    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods],
    }));
  };

  resetState = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;
    const { addToSelectedGood, removeToSelectedGood, resetState } = this;

    return (
      <div className="App">
        <h1 className="App__title">
          {selectedGoods.length
            ? (`${selectedGoods.join(', ')} selected`)
            : ('No goods selected')}
        </h1>
        {selectedGoods.length
          ? (
            <button
              className="card__btn card__btn--reset"
              type="button"
              onClick={resetState}
            >
              Clear
            </button>
          )
          : null}
        <div className="container">
          {goodsFromServer.map(good => (
            <div className={classNames(
              'card',
              { card__active: selectedGoods.includes(good) },
            )}
            >
              <h2 className="card__title" key={good}>
                {good}
              </h2>
              <div className="card-btn">
                <button
                  className="card__btn card__btn--select"
                  type="button"
                  onClick={() => {
                    addToSelectedGood(good);
                  }}
                >
                  Select
                </button>

                <button
                  className="card__btn card__btn--remove"
                  type="button"
                  onClick={() => {
                    removeToSelectedGood(good);
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
