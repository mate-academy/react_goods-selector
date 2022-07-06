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

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  handelGood = (good: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(good)) {
      this.setState((state) => ({
        selectedGoods: state.selectedGoods.filter(select => select !== good),
      }));
    } else {
      this.setState((state) => ({
        selectedGoods: [...state.selectedGoods, good],
      }));
    }
  };

  clear = () => {
    this.setState((state) => {
      const { selectedGoods: arrOfGoods } = state;

      arrOfGoods.length = 0;

      return { selectedGoods: arrOfGoods };
    });
  };

  render() {
    const { selectedGoods } = this.state;
    const normalizedGoods = (list: string[]): string => {
      if (list.length > 1) {
        return `${list.join(', ')} are selected`;
      }

      return `${list.join('')} is selected`;
    };

    return (
      <div className="App content">
        <div className="content__container">
          <h1>
            {selectedGoods.length
              ? `${normalizedGoods(selectedGoods)}`
              : 'No goods selected'}
          </h1>

          {!!selectedGoods.length && (
            <button
              className="button is-rounded is-info"
              type="button"
              onClick={this.clear}
            >
              Clear
            </button>
          )}
        </div>
        <ul className="list">
          {goodsFromServer.map((good) => (
            <div className="list__container">
              <li key={good} className="list__item">
                {good}
              </li>

              <button
                className={classNames(
                  'is-rounded',
                  !selectedGoods.includes(good)
                    ? 'button is-primary'
                    : 'button is-warning',
                )}
                type="button"
                onClick={() => this.handelGood(good)}
              >
                {selectedGoods.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
