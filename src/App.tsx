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

const getGoodsString = (goods: string[]): string => {
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

class App extends Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__title">
            {getGoodsString(selectedGoods)}
          </h1>

          {!!selectedGoods.length && (
            <button
              type="button"
              className="App__clear button"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              X
            </button>
          )}
        </div>

        <ul className="App__list">
          {goodsFromServer.map((good) => {
            const index: number = selectedGoods.indexOf(good);

            return (
              <li
                key={good}
                className={
                  classNames(
                    'App__item',
                    {
                      'App__item--selected': index !== -1,
                    },
                  )
                }
              >
                <span>{good}</span>

                {index === -1 ? (
                  <button
                    type="button"
                    className="App__item-button button"
                    onClick={() => {
                      this.setState((state) => ({ selectedGoods: [...state.selectedGoods, good] }));
                    }}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    type="button"
                    className="App__item-button button"
                    onClick={() => {
                      this.setState(() => {
                        selectedGoods.splice(index, 1);

                        return { selectedGoods };
                      });
                    }}
                  >
                    Remove
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
