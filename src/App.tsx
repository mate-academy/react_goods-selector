import React from 'react';
import './App.scss';
import classNames from 'classnames';

import goodsFromServer from './goods';

interface State {
  selectedGoods: string[],
}

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  removeGood = (good: string) => {
    this.setState(state => (
      { selectedGoods: state.selectedGoods.filter(elem => elem !== good) }
    ));
  };

  addGood = (good: string) => {
    this.setState(state => (
      { selectedGoods: [...state.selectedGoods, good] }
    ));
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    const titleRender = () => {
      switch (selectedGoods.length) {
        case 0:
          return 'No goods selected';

        case 1:
          return `${selectedGoods} is selected`;

        default:
          return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
      }
    };

    return (
      <div className="level">
        <h1 className="title">
          {titleRender()}
        </h1>
        {selectedGoods.length > 0 && (
          <button
            type="button"
            onClick={() => this.clear()}
            className={classNames(
              'level-item',
              'button is-danger',
            )}
          >
            Clear selected goods
          </button>
        )}
        <ul className="level">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'good',
                'level-item',
                'has-text-centered',
                {
                  'good--selected': selectedGoods.includes(good),
                },
              )}
            >
              {good}
              <div className="good__button">
                {selectedGoods.includes(good) ? (
                  <button
                    type="button"
                    className="button is-link"
                    onClick={() => this.removeGood(good)}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button is-primary"
                    onClick={() => this.addGood(good)}
                  >
                    Select
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
