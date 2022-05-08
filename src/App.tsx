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
  selectedGoods: string[]
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  clearing = () => {
    this.setState({ selectedGoods: [] });
  };

  adding = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removing = (good: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(
        (item) => item !== good,
      ),
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    const selectGoods = () => {
      if (selectedGoods.length === 1) {
        return `${selectedGoods.join('')} is selected`;
      }

      if (selectedGoods.length > 1) {
        return `${selectedGoods.join(',')} are selected`;
      }

      return 'No goods selected';
    };

    return (
      <>
        <div className="App">
          <h1 className="title">
            Selected good:
            <span className="red">
              {selectGoods()}
            </span>
            <button
              type="button"
              className="button button__h1"
              onClick={this.clearing}
            >
              X
            </button>
          </h1>
          <ul className="goods">
            {goodsFromServer.map(good => (
              <li key={good} className="good__block">
                <div className={classNames(
                  'good',
                  {
                    good__active: selectedGoods.includes(good),
                  },
                )}
                >
                  {good}
                </div>

                <button
                  type="button"
                  className={classNames(
                    'button',
                    {
                      button__hidden: selectedGoods.includes(good),
                    },
                  )}
                  onClick={() => this.adding(good)}
                >
                  Add
                </button>

                <button
                  type="button"
                  className={classNames(
                    'button',
                    {
                      button__hidden: !selectedGoods.includes(good as never),
                    },
                  )}
                  onClick={() => this.removing(good)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
