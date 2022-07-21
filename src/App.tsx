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
  state = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  createTitle = (goods: string[]) => {
    return goods.length > 0
      ? `${goods.join(', ')} ${goods.length === 1
        ? 'is'
        : 'are'} selected`
      : 'No goods selected';
  };

  changeButton = (good: string) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.includes(good)
        ? state.selectedGoods.filter(x => x !== good)
        : [...state.selectedGoods, good],
    }));
  };

  render() {
    const { goods } = this.state;
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{this.createTitle(selectedGoods)}</h1>
        {(selectedGoods.length > 0 && (
          <button
            type="button"
            className="button buttonOne"
            onClick={() => {
              this.setState(() => {
                return {
                  selectedGoods: [],
                };
              });
            }}
          >
            Clear
          </button>
        )
        )}
        <ul>
          {goods.map(good => (
            <li
              key={good}
              className={
                classNames('list', { active: selectedGoods.includes(good) })
              }
            >
              {good}
              <button
                type="button"
                className="button"
                onClick={() => this.changeButton(good)}
              >
                { selectedGoods.includes(good) ? 'Remove' : 'Select' }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
