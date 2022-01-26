import classNames from 'classnames';
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
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (selectedGood: string) => {
    this.setState(state => {
      const selectedGoods = state.selectedGoods
        .filter(good => good !== selectedGood);

      return {
        selectedGoods,
      };
    });
  };

  deleteGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  finalGood = (selectedGoods: string[]) => {
    const copyGoods = [...selectedGoods];

    const lastGood = copyGoods.pop();

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods.join(' and ')} are selected`;
      default:
        return `${selectedGoods.join(', ')} and ${lastGood} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App card has-background-grey-lighter">
        <h1 className="title has-background-white-ter">
          {this.finalGood(selectedGoods)}
        </h1>

        {selectedGoods.length > 0 && (
          <button
            className="card-button delete is-large"
            type="button"
            onClick={() => this.deleteGoods()}
          >
            X
          </button>
        )}

        <ul className="card-content">
          {goodsFromServer.map((good) => {
            const isGood = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames(
                  'card-text',
                  { selected: isGood },
                )}
              >
                {good}
                {isGood
                  ? (
                    <button
                      className="button is-danger is-rounded"
                      type="button"
                      onClick={() => this.removeGood(good)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      className="button is-success is-rounded"
                      type="button"
                      onClick={() => this.addGood(good)}
                    >
                      Add
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
