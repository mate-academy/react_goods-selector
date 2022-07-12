import classNames from 'classnames';
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
  selectedGoods: string[]
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  getGoodsTitle() {
    if (this.state.selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (this.state.selectedGoods.length === 1) {
      return `${this.state.selectedGoods[0]} is selected`;
    }

    return `${this.state.selectedGoods.slice(0, -1).join(', ')
    } and ${this.state.selectedGoods.slice(-1)} are selected`;
  }

  selectHandler(good: string) {
    return this.setState(state => ({
      selectedGoods: (!state.selectedGoods.includes(good))
        ? [...state.selectedGoods, good]
        : [...state.selectedGoods
          .filter(selected => (selected !== good))],
    }));
  }

  clearHandler() {
    return this.setState({ selectedGoods: [] });
  }

  render() {
    return (
      <div className={classNames(
        'container',
        'is-max-desktop',
        'is-flex',
        'is-flex-direction-column',
        'is-align-items-center',
        'notification',
        'is-light',
      )}
      >
        <progress
          className={classNames('progress', 'is-info')}
          value={this.state.selectedGoods.length}
          max={goodsFromServer.length}
        />

        <h1 className="title is-3 has-text-centered">{this.getGoodsTitle()}</h1>

        <ul>
          {goodsFromServer.map(good => {
            const isGoodSelected = this.state.selectedGoods.includes(good);

            return (
              <li
                className={classNames(
                  'box',
                  'is-flex',
                  'is-justify-content-space-between',
                  'is-align-items-center',
                  'mb-3',
                  { 'has-background-primary': isGoodSelected },
                )}
                key={good}
              >
                {good}

                <button
                  type="button"
                  className={classNames(
                    'button',
                    'ml-6',
                    { 'is-danger': isGoodSelected },
                    { 'is-success': !isGoodSelected },
                  )}
                  onClick={() => this.selectHandler(good)}
                >
                  {isGoodSelected
                    ? 'Remove'
                    : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>

        {this.state.selectedGoods.length > 0 && (
          <button
            type="button"
            className="button is-warning"
            onClick={() => this.clearHandler()}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default App;
