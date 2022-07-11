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
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedGoods: ['Jam'],
  };

  handleGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: (
        selectedGoods.includes(good)
          ? selectedGoods.filter(select => select !== good)
          : [...selectedGoods, good]
      ),
    });
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
  };

  render(): React.ReactNode {
    const { selectedGoods } = this.state;
    const fullTitle = (goods: string[]) => (goods.length > 1
      ? `${selectedGoods.join(', ')} are selected`
      : `${selectedGoods.join(', ')} is selected`);

    return (
      <div className="App content">
        <div className="content__title">
          <h1 className="title">
            {`${selectedGoods.length
              ? fullTitle(selectedGoods)
              : 'No goods selected'}`}
          </h1>

          {selectedGoods.length ? (
            <button
              type="button"
              className={classNames(
                'button',
                'is-rounded',
                'is-outlined',
                'is-warning',
                'is-light',
              )}
              onClick={this.clear}
            >
              Clear
            </button>
          ) : null}
        </div>
        <div className="content__goods">
          {goodsFromServer.map(good => (
            <div className="line box" key={good}>
              <article className="
                is-large
                line__item"
              >
                {good}
              </article>

              <button
                type="button"
                className={classNames(
                  'button',
                  'is-light',
                  !selectedGoods.includes(good)
                    ? 'is-success is-outlined'
                    : 'is-danger',
                )}
                onClick={() => this.handleGood(good)}
              >
                {selectedGoods.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
