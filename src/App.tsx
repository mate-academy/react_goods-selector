import React from 'react';
import classNames from 'classnames';
import './App.scss';
import 'bulma/css/bulma.min.css';

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
  state: State = {
    selectedGoods: ['Jam'],
  };

  changeTitle = (goods: string[]) => {
    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return `${goods[0]} is selected`;
    }

    return goods.reduce((title: string, good: string, index: number) => {
      if (index === goods.length - 1) {
        return `${title} and ${good} are selected`;
      }

      if (index === goods.length - 2) {
        return `${title} ${good}`;
      }

      return `${title} ${good},`;
    }, '');
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {this.changeTitle(selectedGoods)}
          {selectedGoods.length > 0 && (
            <button
              className="
                button
                is-danger
                is-light
                is-small
                ml-3
                mt-1"
              type="button"
              onClick={() => (
                this.setState({ selectedGoods: [] })
              )}
            >
              X
            </button>
          )}
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames('mb-4', 'p-2', {
                'has-background-warning': selectedGoods.includes(good),
              })}
            >
              {good}
              {selectedGoods.includes(good)
                ? (
                  <button
                    className="
                      button
                      is-danger
                      is-light
                      is-small
                      ml-3"
                    type="button"
                    onClick={() => {
                      selectedGoods.splice(selectedGoods.indexOf(good), 1);
                      this.setState({
                        selectedGoods,
                      });
                    }}
                  >
                    Remove
                  </button>
                )
                : (
                  <button
                    className="
                      button
                      is-success
                      is-light
                      is-small
                      ml-3"
                    type="button"
                    onClick={() => {
                      this.setState({
                        selectedGoods: [...selectedGoods, good],
                      });
                    }}
                  >
                    Add
                  </button>
                )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
