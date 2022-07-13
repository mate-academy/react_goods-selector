import { Component } from 'react';
import './App.scss';
import classNames from 'classnames';

import goodsFromServer from './goods';

type State = {
  selectedGoods: string[],
};

class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App content">
        <div className="content__container">
          <h1>
            {selectedGoods.length
              ? `${selectedGoods.join(', ')} is selecded`
              : 'No goods selected'}
          </h1>

          {selectedGoods.length
            ? (
              <button
                type="button"
                className="button is-rounded is-danger"
                onClick={() => {
                  this.setState({ selectedGoods: [] });
                }}
              >
                Clear
              </button>
            ) : null}
        </div>

        <ul className="list">
          {goodsFromServer.map((good) => (
            <div className="list__container">
              <li key={good} className="list__item">
                {good}
              </li>

              <button
                className={classNames(
                  'is-rounded',
                  !selectedGoods.includes(good)
                    ? 'button is-primary'
                    : 'button is-danger',
                )}
                type="button"
                onClick={() => {
                  this.setState({
                    selectedGoods: selectedGoods.includes(good)
                      // eslint-disable-next-line max-len
                      ? selectedGoods.filter((select: string) => select !== good)
                      : [...selectedGoods, good],
                  });
                }}
              >
                {selectedGoods.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
