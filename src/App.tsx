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

  addGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [
        ...prevState.selectedGoods,
        good,
      ],
    }));
  };

  removeGood = (good: string) => {
    this.setState(({ selectedGoods }) => {
      return { selectedGoods: selectedGoods.filter(item => item !== good) };
    });
  };

  cleanOutGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {
            selectedGoods.length
              ? `${selectedGoods.map(good => ` ${good}`)} selected`
              : 'No goods selected'
          }
        </h1>

        <button
          type="button"
          className={classNames(
            'App__btn',
            { 'App__btn--active': selectedGoods.length },
          )}
          onClick={this.cleanOutGoods}
        >
          Clean out
        </button>

        <ul className="App__goods goods">
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                'goods__item',
                'item',
                { 'item--selected': selectedGoods.includes(good) },
              )}
              key={good}
            >
              <div className="item__good-name">
                {good}
              </div>
              <button
                type="button"
                className="item__btn"
                onClick={() => {
                  if (selectedGoods.includes(good)) {
                    this.removeGood(good);
                  } else {
                    this.addGood(good);
                  }
                }}
              >
                {selectedGoods.includes(good) ? 'Remove' : 'Select'}
              </button>
            </li>

          ))}
        </ul>
      </div>
    );
  }
}

export default App;
