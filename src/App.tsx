import classNames from 'classnames';
import { Component } from 'react';
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

type Props = {};

type State = {
  selectedGoods: string[],
};

class App extends Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  getGoodsString = (goods: string[]): string => {
    switch (goods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      case 2:
        return `${goods.join(' and ')} are selected`;
      default:
        return `${goods.slice(0, -1).join(', ')} and ${goods.at(-1)} are selected`;
    }
  };

  clearSelected = () => this.setState({ selectedGoods: [] });

  removeFromSelected = (index: number) => this.setState((state) => (
    { selectedGoods: state.selectedGoods.slice(index, 1) }
  ));

  addToSelected = (good: string) => this.setState(
    (state) => ({ selectedGoods: [...state.selectedGoods, good] }),
  );

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__title">
            {this.getGoodsString(selectedGoods)}
          </h1>

          {!!selectedGoods.length && (
            <button
              type="button"
              className="App__clear button"
              onClick={this.clearSelected}
            >
              X
            </button>
          )}
        </div>

        <ul className="App__list">
          {goodsFromServer.map((good, index) => {
            const include: boolean = selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={
                  classNames(
                    'App__item',
                    {
                      'App__item--selected': include,
                    },
                  )
                }
              >
                <span>{good}</span>

                {include ? (
                  <button
                    type="button"
                    className="App__item-button button"
                    onClick={() => this.removeFromSelected(index)}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    className="App__item-button button"
                    onClick={() => this.addToSelected(good)}
                  >
                    Add
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
