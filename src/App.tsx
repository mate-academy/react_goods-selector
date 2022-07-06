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

interface State {
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (item: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, item],
    }));
  };

  deleteGood = (item: string) => {
    this.setState(({ selectedGoods }) => {
      const goodIndex = selectedGoods.indexOf(item);

      selectedGoods.splice(goodIndex, 1);

      return { selectedGoods };
    });
  };

  clearListOfGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;
    let message = 'No goods';

    if (selectedGoods.length > 1) {
      message = `${selectedGoods.slice(0, -1).join(', ')} and `
      + `${selectedGoods[selectedGoods.length - 1]} are`;
    } else if (selectedGoods.length === 1) {
      message = `${selectedGoods[0]} is`;
    }

    return (
      <div className="App">
        <div className="goods">
          <h1 className="goods__title">
            {`${message} selected`}
          </h1>

          <ul className="goods__list">
            {goodsFromServer.map(good => {
              const isActive = this.state.selectedGoods.includes(good);

              return (
                <li key={good} className="goods__item">
                  <p>{good}</p>
                  <button
                    type="button"
                    onClick={isActive
                      ? () => this.deleteGood(good)
                      : () => this.selectGood(good)}
                    className={`goods__button ${isActive ? 'goods__button--active' : ''}`}
                  >
                    {isActive ? 'Remove' : 'Select'}
                  </button>

                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={this.clearListOfGoods}
            className="goods__button"
          >
            Clear
          </button>
        </div>

      </div>
    );
  }
}

export default App;
