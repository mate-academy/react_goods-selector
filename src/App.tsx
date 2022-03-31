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

  updateGoods = (good: string) => {
    this.setState((prevState: State) => {
      return prevState.selectedGoods.includes(good)
        ? { selectedGoods: prevState.selectedGoods.filter(item => item !== good) }
        : { selectedGoods: [...prevState.selectedGoods, good] };
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App-title">
          Selected good: -&nbsp;
          {this.createBucket(selectedGoods)}
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
                onClick={() => this.updateGoods(good)}
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
