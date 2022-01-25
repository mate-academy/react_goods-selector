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
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: [],
  };

  selectHandler = (good: string) => {
    this.setState((prevState) => ({
      selectedGood: [
        ...prevState.selectedGood,
        good,
      ],
    }));
  };

  removeHandler = (good: string) => {
    this.setState((prevState) => ({
      selectedGood: [
        ...prevState.selectedGood.filter(item => item !== good),
      ],
    }));
  };

  displaySelectedGoods = () => {
    const selectedGoods = [...this.state.selectedGood];

    switch (selectedGoods.length) {
      case (0):
        return 'No goods selected';

      case (1):
        return `${selectedGoods[0]} is selected`;

      default:
      {
        const last = selectedGoods.pop();

        return `${selectedGoods.join(', ')} and ${last} are selected.`;
      }
    }
  };

  clearSelected = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>
            {this.displaySelectedGoods()}
            {(selectedGood.length > 0) && (
              <button
                type="button"
                className="button button--clear"
                onClick={() => {
                  this.clearSelected();
                }}
              >
                X
              </button>
            )}
          </h1>
        </div>
        <p className="counter">
          {`${selectedGood.length} from ${goodsFromServer.length}`}
        </p>

        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="list__item"
            >
              {!selectedGood.includes(good)
              && (
                <button
                  type="button"
                  className="button button--add"
                  onClick={() => {
                    this.selectHandler(good);
                  }}
                >
                  Add
                </button>
              )}
              <span
                className={classNames('', { selectedGood: selectedGood.includes(good) })}
              >
                {good}
              </span>
              {selectedGood.includes(good)
              && (
                <button
                  type="button"
                  className="button button--remove"
                  onClick={() => {
                    this.removeHandler(good);
                  }}
                >
                  Remove
                </button>
              )}

            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
