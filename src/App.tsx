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
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  isChecked = (good: string) => {
    return !this.state.selectedGoods.includes(good)
      ? this.setState((state) => ({
        selectedGoods: [...state.selectedGoods, good],
      }))
      : this.setState((state) => ({
        selectedGoods: state.selectedGoods.filter(item => item !== good),
      }));
  };

  render() {
    const { selectedGoods: goods } = this.state;
    const stringOfProducts = [
      goods.slice(0, -1).join(', '),
      goods.slice(-1),
    ].join(
      goods.length > 1
        ? ' and '
        : '',
    );

    return (
      <div className="App">
        {goods.length ? (
          <h1 className="App__title">
            {stringOfProducts}
            {' is selected'}
          </h1>
        ) : (
          <h1 className="App__title">No goods selected</h1>
        )}

        <div className="App__button">
          {!!goods.length && (
            <button
              type="button"
              className="App__clear-btn"
              onClick={() => this.setState({ selectedGoods: [] })}
            >
              Clear
            </button>
          )}
        </div>

        <ul className="App__list">
          {goodsFromServer.map((good: string) => (
            <li key={good} className="App__list-item">
              <label
                htmlFor={good}
                className={classNames(
                  'App__label',
                  { 'App__label-checked': goods.includes(good) },
                )}
              >
                <p>{good}</p>
                <input
                  type="checkbox"
                  className="App__checkbox"
                  id={good}
                  checked={goods.includes(good)}
                  onChange={this.isChecked.bind(this, good)}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
