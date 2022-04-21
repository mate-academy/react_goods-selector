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
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              X
            </button>
          </h1>
          <ul className="goods">
            {goodsFromServer.map(good => (
              <div key={good} className="good__block">
                <li className={classNames(
                  'good',
                  {
                    good__active: selectedGoods.includes(good),
                  },
                )}
                >
                  {good}
                </li>

                <button
                  type="button"
                  className={classNames(
                    'button',
                    {
                      button__hidden: selectedGoods.includes(good),
                    },
                  )}
                  onClick={() => {
                    this.setState(() => ({
                      selectedGoods: [...selectedGoods, good],
                    }));
                  }}
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
                  onClick={() => {
                    this.setState(() => ({
                      selectedGoods: selectedGoods.filter(
                        (item) => item !== good,
                      ),
                    }));
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
