import React from 'react';
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
  goods: string[],
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  select = (good: string) => {
    this.setState(oldState => ({
      selectedGoods: [...oldState.selectedGoods, good],
    }));
  };

  remove = (good: string) => {
    this.setState(oldState => {
      oldState.selectedGoods.splice(oldState.selectedGoods.indexOf(good), 1);

      const result = {
        selectedGoods: oldState.selectedGoods,
      };

      return result;
    });
  };

  stringOfGoods = (goods: string[]) => {
    let title = '';

    switch (goods.length) {
      case (0):
        title = 'No goods selected';
        break;

      case (1):
        title = `${goods[0]} is selected`;
        break;

      case (2):
        title = `${goods[0]} and ${goods[1]} are selected`;
        break;

      default:
        for (let i = 0; i < goods.length; i += 1) {
          if (i === goods.length - 2) {
            title += `${goods[i]} `;
          } else if (i === goods.length - 1) {
            title += `and ${goods[i]} are selected`;
          } else {
            title += `${goods[i]}, `;
          }
        }
    }

    return title;
  };

  delete = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.stringOfGoods(selectedGoods)}
          <button
            type="button"
            className="button__delete"
            onClick={
              () => this.delete()
            }
          >
            Delete selected goods
          </button>
        </h1>
        <ul>
          {goods.map(good => {
            const selected = selectedGoods.includes(good);

            return (
              <>
                <li key={good} className={selected ? 'button__selected' : 'button'}>
                  {good}
                  {!selectedGoods.includes(good)
                    ? <button type="button" onClick={() => this.select(good)}>Select</button>
                    : <button type="button" onClick={() => this.remove(good)}>Remove</button>}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
