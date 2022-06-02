import React from 'react';
import cn from 'classnames';
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
    selectedGoods: ['Jam'],
  };

  isAdd = (good: string) => {
    const arr = [...this.state.selectedGoods];

    if (!arr.includes(good)) {
      arr.push(good);
      this.setState({ selectedGoods: arr });
    } else {
      const index = arr.indexOf(good);

      arr.splice(index, 1);
      this.setState({ selectedGoods: arr });
    }
  };

  message = (arr: string[]) => {
    if (!arr.length) {
      return 'No goods selected';
    }

    if (arr.length === 1) {
      return `${arr.slice(-1)} is selected`;
    }

    return `${arr.slice(0, -1).join(', ')} and ${arr.slice(-1)} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="text-center fs-2">
          <h2>
            {this.message(selectedGoods)}
          </h2>
          {selectedGoods.length >= 1 && (
            <button
              type="button"
              className="
                btn-lg
                btn-danger
                rounded
              "
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}
        </h1>
        <ul className="list-group">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={cn('list-group-item',
                { active: selectedGoods.includes(good) })}
            >
              <h2 className="fs-5">
                {good}
              </h2>
              <button
                type="button"
                className="
                  btn
                  btn-info
                  rounded
                "
                onClick={() => this.isAdd(good)}
              >
                {!selectedGoods.includes(good) ? 'Select' : 'Remove'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
