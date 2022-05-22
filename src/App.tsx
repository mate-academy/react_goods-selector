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
  selectedGoods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(item => item !== good),
    }));
  };

  removeAllGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  goodsList = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected.';

      case 1:
        return `${selectedGoods} is selected.`;

      case goodsFromServer.length:
        return 'All goods are selected.';

      default:
        return `${selectedGoods.slice(0, -1).join(', ')}
            and ${selectedGoods.slice(-1)} are selected.`;
    }
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">{this.goodsList()}</h1>
        <button
          className={classNames(
            'app__button',
            'button',
            { button__removeAll: !this.state.selectedGoods[0] },
          )}
          type="button"
          onClick={this.removeAllGoods}
        >
          Remove all
        </button>

        <ul className="list">
          {goodsFromServer.map(good => {
            const isSelected = this.state.selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames(
                  'list__item',
                  { list__item__selected: isSelected },
                )}
              >
                {good}
                <button
                  className={classNames(
                    'button',
                    { button__selected: isSelected },
                  )}
                  type="button"
                  onClick={() => {
                    return isSelected
                      ? this.removeGood(good)
                      : this.selectGood(good);
                  }}
                >
                  {isSelected ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
