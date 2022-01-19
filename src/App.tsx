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
        <button
          type="button"
          className="button__res"
          onClick={
            () => this.delete()
          }
        >
          x
        </button>
        <span>
          {'    '}
        </span>
        <h1 className="title">
          {this.stringOfGoods(selectedGoods)}
        </h1>
        <ul>
          {goods.map(good => {
            const selected = selectedGoods.includes(good);

            return (
              <>
                <li key={good} className={selected ? 'selected' : 'not-selected'}>
                  {good}
                  <div className="button">
                    {!selectedGoods.includes(good)
                      ? <button type="button" className="button-55" onClick={() => this.select(good)}>Select</button>
                      : <button type="button" className="button-56" onClick={() => this.remove(good)}>Remove</button>}
                  </div>
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
