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
  selected: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    selected: [],
  };

  getString = (goods: string[]) => {
    const lastGood = goods[goods.length - 1];
    const goodsExceptOfLast = goods.slice(0, -1).join(', ');

    switch (goods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      default:
        return `${goodsExceptOfLast} and ${lastGood} are selected`;
    }
  };

  addGoods = (good: string) => {
    this.setState((state) => ({ selected: [...state.selected, good] }));
  };

  removeGood = (good: string) => (
    this.setState((state) => (
      { selected: [...state.selected].filter(goodItem => goodItem !== good) }))
  );

  removeAllGoods = () => (
    this.setState({ selected: [] })
  );

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <div
          className="h1_wrapper"
        >
          <h1>
            {(this.getString(selected))}
          </h1>
          {(selected.length > 0)
            && (
              <button
                type="button"
                onClick={this.removeAllGoods}
              >
                remove all
              </button>
            )}
        </div>

        <div
          className="ul_wrapper"
        >
          <ul>
            {goodsFromServer.map((good: string) => (
              <li
                className="list"
              >
                <span
                  className={(
                    selected.includes(good)
                      ? 'active'
                      : ''
                  )}
                >
                  {good}
                </span>
                {(!selected.includes(good))
                && (
                  <button
                    type="button"
                    onClick={() => {
                      this.addGoods(good);
                    }}
                  >
                    add
                  </button>
                )}
                {(selected.includes(good))
                && (
                  <button
                    type="button"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    remove
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
