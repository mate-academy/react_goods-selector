/* eslint-disable react/sort-comp */
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
  state: State = {
    selectedGoods: ['Jam'],
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
  };

  addGoods = (good:string) => {
    this.setState((state) => ({ selectedGoods: [...state.selectedGoods, good] }));
  };

  removeGood = (goodToRemove: string) => {
    this.setState((state) => {
      return {
        selectedGoods: state.selectedGoods.filter(good => good !== goodToRemove),
      };
    });
  };

  displaySelected = () => {
    const { selectedGoods: selected } = this.state;

    switch (selected.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selected} is selected`;
      case 2:
        return `${selected.join(' and ')} are selected`;
      default:
        return `${selected.slice(0, -1).join(', ')} and ${selected.slice(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods: selected } = this.state;

    return (
      <div className="App">
        <section className="goods">
          <h1 className="goods__selected">
            <button
              type="button"
              className={classNames('goods__close', { active__close: selected.length === 0 })}
              disabled={selected.length === 0}
              onClick={this.clear}
            >
              X
            </button>
            <>
              {this.displaySelected()}
            </>
          </h1>

          <ul className="goods__items">
            {goodsFromServer.map(item => (
              <>
                <li
                  key={item}
                  className={classNames('goods__item', { active: selected.includes(item) })}
                >
                  {item}
                </li>
                <button
                  type="button"
                  className={classNames('products__button', { active__button: selected.includes(item) })}
                  onClick={() => (
                    selected.includes(item) ? this.removeGood(item) : this.addGoods(item)
                  )}
                >
                  {selected.includes(item) ? 'Remove' : 'Add'}
                </button>
              </>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
