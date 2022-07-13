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
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  reset = () => {
    this.setState({ selectedGoods: [] });
  };

  clickHandler = (good: string) => {
    const { selectedGoods: selectedGood } = this.state;

    this.setState({
      selectedGoods: selectedGood.includes(good)
        ? selectedGood.filter(choosenGod => choosenGod !== good)
        : [...selectedGood, good],
    });
  };

  render() {
    const { selectedGoods: selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {selectedGood.length
            ? `${selectedGood.join(', ')} is selected`
            : 'No goods selected'}
        </h1>

        <button
          type="button"
          className="App__button button"
          onClick={this.reset}
        >
          Clear
        </button>

        <ul className="goods">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'goods__good',
                {
                  'goods__good--selected': selectedGood
                    .find(goods => goods === good),
                },
              )}
            >
              <p>{good}</p>

              <button
                type="button"
                className={classNames(
                  'goods__button',
                  { 'goods__button--select': true },
                )}
                onClick={() => this.clickHandler(good)}
              >
                {selectedGood.find(goods => goods === good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
