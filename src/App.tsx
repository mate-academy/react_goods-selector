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

  addGood = (good: string) => {
    this.setState((state) => {
      const index = state.selectedGoods.indexOf(good);

      if (index !== -1) {
        state.selectedGoods.splice(index, 1);

        return state;
      }

      return { selectedGoods: [...state.selectedGoods, good] };
    });
  };

  dispalySelected = () => {
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

      <div className="app">
        <section className="products">
          <h1 className="products__selected">
            <button
              type="button"
              className={classNames('products__close', { active__close: selected.length === 0 })}
              disabled={selected.length === 0}
              onClick={this.clear}
            >
              X
            </button>
            <>
              {this.dispalySelected()}
            </>
          </h1>
          <ul className="products__items">
            {goodsFromServer.map(item => (
              <>
                <li
                  key={item}
                  className={classNames('products__item', { active: selected.includes(item) })}
                >
                  {item}
                </li>
                <button
                  type="button"
                  className={classNames('products__button', { active__button: selected.includes(item) })}
                  // disabled={selected.includes(item)}
                  onClick={() => (
                    this.addGood(item)
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
