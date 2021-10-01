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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  resetGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  addGoods = (product: string) => {
    this.setState((currentState) => ({
      selectedGoods: [...currentState.selectedGoods, product],
    }));
  };

  generateTitle = () => {
    const { selectedGoods } = this.state;

    let message = '';

    if (selectedGoods.length === 0) {
      message = 'No selected goods';
    }

    if (selectedGoods.length === 1) {
      message = `${selectedGoods} is selected`;
    }

    if (selectedGoods.length > 1) {
      const firstPartOfGoods = selectedGoods.slice(0, -1).join(', ');
      const lastGood = selectedGoods[selectedGoods.length - 1];

      message = `${firstPartOfGoods} and ${lastGood} are selected`;
    }

    return message;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App-goods__title">
          {this.generateTitle()}
        </h1>

        {(selectedGoods.length > 0) && (
          <button
            type="button"
            className="App-goods__title-reset"
            onClick={this.resetGoods}
          >
            X
          </button>
        )}

        <ul className="App-goods__list">
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                !selectedGoods.includes(good)
                  ? 'App-goods__item'
                  : 'App-added',
              )}
              key={good}
            >
              {good}
              {(!selectedGoods.includes(good)) && (
                <button
                  type="button"
                  className="App-goods__button"
                  onClick={() => {
                    this.addGoods(good);
                  }}
                >
                  add
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
