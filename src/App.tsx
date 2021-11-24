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

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addClick = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeClick = (good: string) => {
    const { selectedGoods } = this.state;
    const index = selectedGoods.indexOf(good);
    const firstPart = selectedGoods.slice(0, index);
    const secondPart = selectedGoods.slice(index + 1);
    const result = firstPart.concat(secondPart);

    this.setState({ selectedGoods: [...result] });
  };

  render() {
    const { selectedGoods } = this.state;
    let text = '';

    if (selectedGoods.length === 0) {
      text = 'No goods selected';
    } else if (selectedGoods.length === 1) {
      text = `${selectedGoods} is selected`;
    } else if (selectedGoods.length > 1) {
      text = `${selectedGoods.join(' ,')} are selected`;
    }

    return (
      <div className="goodsBloc">
        <div className="goodsBloc-heading">
          <h1 className="goodsBloc-heading-title">
            {text}
          </h1>
          <button
            type="button"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
            className={classNames('goodsBloc-heading-btn', { 'goodsBloc-heading-btn--emptyState': selectedGoods.length === 0 })}
          >
            X
          </button>
        </div>
        <ul className="goodsList">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames('list-item', { 'list-item--selected': selectedGoods.includes(good) })}
            >
              {good}
              <span>
                <button
                  type="button"
                  className={classNames('btn', { 'btn--selected': selectedGoods.includes(good) })}
                  onClick={() => {
                    this.addClick(good);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    this.removeClick(good);
                  }}
                >
                  Remove
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
