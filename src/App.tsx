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
  selectedGood: {
    [key: string]: boolean,
  },
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: {
      Jam: true,
    },
  };

  isChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    this.setState((state: State) => {
      const goods = state;

      goods.selectedGood[name] = checked;

      return goods;
    });
  };

  render() {
    const products = Object.keys(this.state.selectedGood)
      .filter(good => this.state.selectedGood[good]);

    let stringOfProducts = '';

    if (products.length === 1) {
      stringOfProducts = products.join('');
    }

    if (products.length > 1) {
      stringOfProducts = `${products.slice(0, -1).join(', ')}`
      + ' and '
      + `${products[products.length - 1]}`;
    }

    return (
      <div className="App">
        {products.length ? (
          <h1 className="App__title">
            {stringOfProducts}
            {' is selected'}
          </h1>
        ) : (
          <h1 className="App__title">No goods selected</h1>
        )}

        <div className="App__button">
          {!!products.length && (
            <button
              type="button"
              className="App__clear-btn"
              onClick={() => {
                this.setState((state) => {
                  const newGoods = Object.keys(state.selectedGood)
                    .reduce((a, b) => ({
                      ...a,
                      [b]: false,
                    }), {});

                  return {
                    selectedGood: newGoods,
                  };
                });
              }}
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
                  { 'App__label-checked': this.state.selectedGood[good] },
                )}
              >
                <p>{good}</p>
                <input
                  type="checkbox"
                  className="App__checkbox"
                  name={good}
                  id={good}
                  checked={this.state.selectedGood[good] || false}
                  onChange={this.isChecked}
                />
                {/* <button type="button">Submit</button> */}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
