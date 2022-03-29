import React from 'react';
import './App.scss';
import './button.scss';

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

interface State {
  selectedGoods: string[],
}

class App extends React.Component<Props, State> {
  state: State = {
    selectedGoods: [],
  };

  select = (name: string) => {
    this.setState((state) => {
      return { selectedGoods: [...state.selectedGoods, name] };
    });
  };

  remove = (good: string) => this.setState((state) => {
    const goods = state.selectedGoods;

    goods.splice(goods.indexOf(good), 1);

    return { selectedGoods: goods };
  });

  clearSelection = () => {
    this.setState({ selectedGoods: [] });
  };

  showSelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods.join(' and ')} are selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.at(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {
            selectedGoods.length
              ? this.showSelectedGoods()
              : 'No goods selected'
          }
          {
            selectedGoods.length
              ? (
                <button
                  type="button"
                  className="button button--x"
                  onClick={() => {
                    this.clearSelection();
                  }}
                >
                  X
                </button>
              )
              : ''
          }
        </h1>
        <ul className="goods">
          {goodsFromServer.map((good) => (
            <li
              key={good}
              className={`goods__item ${
                selectedGoods.includes(good)
                  ? 'goods__isSelected'
                  : ''
              }`}
            >
              {good}
              {
                selectedGoods.includes(good)
                  ? (
                    <button
                      type="button"
                      className="button button--remove"
                      onClick={() => {
                        this.remove(good);
                      }}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="button button--add"
                      onClick={() => {
                        this.select(good);
                      }}
                    >
                      Add
                    </button>
                  )
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
