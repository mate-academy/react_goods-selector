import React from 'react';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

export class App extends React.Component<{ }, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  titleText = (goods: string[] | []) => {
    switch (true) {
      case !goods.length:
        return 'No goods selected';

      case goods.length === 1:
        return `${goods[0]} is selected`;

      case goods.length > 1:
        return `${goods.slice(0, -1).join(', ')} and ${goods.slice(-1)} are selected`;

      default:
        return '';
    }
  };

  selectGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods]
        .filter(selectedGood => good !== selectedGood),
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title title is-2">
            {this.titleText(selectedGoods)}
          </h1>

          <button
            type="button"
            className="App__clear button is-info is-outlined"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            Clear
          </button>
        </header>

        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'Good',
                {
                  'Good--active': selectedGoods.includes(good),
                },
              )}
            >
              {good}

              {selectedGoods.includes(good)
                ? (
                  <button
                    type="button"
                    className="button is-danger is-outlined"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button is-primary is-outlined"
                    onClick={() => {
                      this.selectGood(good);
                    }}
                  >
                    Select
                  </button>
                )}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
