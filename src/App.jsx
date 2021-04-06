import React from 'react';
import classNames from 'classnames';

import 'bulma/css/bulma.css';

const goodsFromServer = [
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

export class App extends React.Component {
  state = {
    selectedGoods: [],
  }

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  selectGood = (currentGood) => {
    this.setState(state => ({
      selectedGoods: [
        ...state.selectedGoods,
        currentGood,
      ],
    }));
  }

  removeGood = (currentGood) => {
    this.setState((state) => {
      const goodsUpdated = [...state.selectedGoods];
      const indexToRemove
      = goodsUpdated.findIndex(good => good === currentGood);

      goodsUpdated.splice(indexToRemove, 1);

      return {
        selectedGoods: goodsUpdated,
      };
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="box has-text-centered">
            <h1 className="is-size-2">
              Selected goods:
              <br />
              {selectedGoods.length === 0
                ? 'No goods selected'
                : selectedGoods.join(', ')}
            </h1>
            <button
              type="button"
              className="button is-large mt-6"
              onClick={this.clearSelectedGoods}
              disabled={!selectedGoods.length}
            >
              Clear
            </button>
          </div>

          {goodsFromServer.map(good => (
            <li
              className={classNames(
                {
                  'box has-text-centered': true,
                  'is-flex is-flex-direction-column is-size-3': true,
                  'has-background-warning-light': selectedGoods.includes(good),
                },
              )}
            >
              {good}
              <div className="buttons are-medium is-centered mt-5">
                <button
                  type="button"
                  className="button is-success is-light is-outlined"
                  onClick={() => (this.selectGood(good))}
                  disabled={selectedGoods.includes(good)}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="button is-danger is-light is-outlined"
                  onClick={() => (this.removeGood(good))}
                  disabled={!selectedGoods.includes(good)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </div>
      </div>
    );
  }
}
