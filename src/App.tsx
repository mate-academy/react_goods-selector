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

  removeFromSelectedGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods.filter(item => item !== good)],
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
          {selectedGoods.length
            ? (`${selectedGoods.join(', ')} selected`)
            : ('No goods selected')}
        </h1>
        {!selectedGoods.length || (
          <button
            className="card__button card__button--reset"
            type="button"
            onClick={resetState}
          >
            Clear
          </button>
        )}
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
            <div className="card-button">
              <button
                className="card__button"
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
    );
  }
}

export default App;
