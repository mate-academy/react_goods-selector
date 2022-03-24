import React from 'react';
import './App.scss';
import cn from 'classnames';

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

type Props = {};

type State = {
  selectedGood: string[];
};

class App extends React.Component<Props, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, good],
    }));
  };

  clearGood = () => {
    this.setState({ selectedGood: [] });
  };

  removeGood = (good: string) => {
    const goods = this.state.selectedGood;
    const clearedGoods = goods.filter(item => item !== good);

    this.setState({ selectedGood: clearedGoods });
  };

  createText = () => {
    const { selectedGood } = this.state;
    const penultGood = selectedGood.indexOf(selectedGood[selectedGood.length - 2]);
    const twoLastGoods = selectedGood.slice(penultGood, selectedGood.length);
    const withoutTwoLastGoods = selectedGood.slice(0, penultGood);

    switch (selectedGood.length) {
      case 0:
        return 'no good selected';
      case 1:
        return `${selectedGood.join()} is selected`;
      case 2:
        return `${selectedGood.join(' and ')} are selected`;
      case goodsFromServer.length:
        return 'all goods selected';
      default:
        return `${withoutTwoLastGoods.join(', ')}, ${twoLastGoods.join(' and ')} are selected`;
    }
  };

  render() {
    const { selectedGood } = this.state;
    const {
      addGood,
      clearGood,
      removeGood,
      createText,
    } = this;

    return (
      <div className="app">
        <div className="app__header">
          <h1 className="app__title">
            Selected good:
          </h1>
          <div className="app__goods">
            <h2>
              {createText()}
            </h2>
            {selectedGood.length > 0
              && (
                <button
                  className="app__button app__button--remove"
                  type="button"
                  onClick={clearGood}
                >
                  X
                </button>
              )}
          </div>
        </div>
        <ul className="app__list">
          {goodsFromServer.map(good => (
            <li
              className={cn('app__list-item', {
                'app__list-item--selected': selectedGood.includes(good),
              })}
              key={good}
            >
              <h3>{good}</h3>
              {selectedGood.includes(good)
                ? (
                  <button
                    className="app__button app__button--add"
                    type="button"
                    onClick={() => {
                      removeGood(good);
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    className="app__button app__button--remove"
                    type="button"
                    onClick={() => {
                      addGood(good);
                    }}
                  >
                    Add
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
