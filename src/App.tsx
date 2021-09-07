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
    this.setState((currentState) => ({
      selectedGoods: [...currentState.selectedGoods, good],
    }));
  };

  removeFromSelectedGood = (good: string) => {
    this.setState((currentState) => ({
      selectedGoods: [...currentState.selectedGoods.filter(item => item !== good)],
    }));
  };

  resetState = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;
    const { addToSelectedGood, removeFromSelectedGood, resetState } = this;

    return (
      <div className="App">
        <h1 className="App__title">
          {selectedGoods.length > 0
            ? (`${selectedGoods.join(', ')} selected`)
            : ('No goods selected')}
        </h1>
        {selectedGoods.length > 0
          ? (
            <button
              className="card__btn card__btn--reset"
              type="button"
              onClick={resetState}
            >
              Clear
            </button>
          )
          : ''}
        <div className="container">
          {goodsFromServer.map(good => (
            <div
              key={good}
              className={classNames(
                'card',
                {
                  isActive: selectedGoods.includes(good),
                },
              )}
            >
              <h2 className="card__title">
                {good}
              </h2>
              <div className="card-btn">
                <button
                  className="card__btn card__btn--select"
                  type="button"
                  onClick={() => {
                    if (selectedGoods.includes(good)) {
                      removeFromSelectedGood(good);
                    } else {
                      addToSelectedGood(good);
                    }
                  }}
                >
                  {selectedGoods.includes(good)
                    ? 'Remove'
                    : 'Add'}
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
