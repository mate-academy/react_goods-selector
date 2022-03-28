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
  state = {
    selectedGoods: [],
  };

  createBucket = (selectedGoods: string[]) => {
    switch (selectedGoods.length) {
      case 0:
        return 'No selected goods';
        break;
      case 1:
        return `${selectedGoods} is selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -&nbsp;
          {this.createBucket(selectedGoods)}
            &nbsp;
          <button
            className="btn-cancel"
            type="button"
            onClick={() => this.setState({ selectedGoods: [] })}
          >
            X
          </button>
        </h1>

        <ol className="goods">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="good"
            >
              <p className="good__name">
                {good}
              </p>
              <button
                type="button"
                className={classNames(
                  'good__btn',
                  {
                    checked: good === selectedGoods.find(item => item === good),
                  },
                )}
                onClick={
                  good === selectedGoods.find(item => item === good) ? () => this.setState(
                    (state) => ({
                      selectedGoods: [...state.selectedGoods.filter(item => item !== good)],
                    }),
                  ) : () => this.setState((state) => (
                    { selectedGoods: [...state.selectedGoods, good] }))
                }
              >
                Select
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
