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
  selectedGoods: string[]
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (item: string) => {
    this.setState((state: State) => {
      state.selectedGoods.push(item);

      return { selectedGoods: state.selectedGoods };
    });
  };

  removeGood = (item: string) => {
    this.setState((state: State) => {
      const indexOfGood = state.selectedGoods.indexOf(item);

      state.selectedGoods.splice(indexOfGood, 1);

      return { selectedGoods: state.selectedGoods };
    });
  };

  clearSelects = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  getTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      case 2:
        return `${selectedGoods.join(' and ')} are selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="goods">
          <h1 className="goods-title">
            Selected goods:
            {' '}
            {this.getTitle()}
          </h1>

          <ul className="goods-list">
            {goodsFromServer.map(good => {
              const isSelect = this.state.selectedGoods.includes(good);

              return (
                <label
                  className={classNames('goods-list__item',
                    {
                      goods__active: isSelect,
                    })}
                  key={good}
                >
                  <li>
                    {good}
                    <button
                      type="button"
                      className="btn"
                      onClick={isSelect
                        ? () => this.removeGood(good)
                        : () => this.selectGood(good)}
                    >
                      {isSelect ? 'Remove' : 'Select'}
                    </button>
                  </li>
                </label>
              );
            })}
          </ul>

          {this.state.selectedGoods.length > 0
            ? (
              <button
                type="button"
                className="clear-btn"
                onClick={() => this.clearSelects()}
              >
                Clear
              </button>
            )
            : null}

        </div>
      </div>
    );
  }
}

export default App;
