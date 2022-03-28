import React from 'react';
import classNames from 'classnames';
import { createSentence } from './helper';
import { goodsFromServer } from './goodsList';

import './App.scss';
import './button.css';

type State = {
  selectedGoods: string[]
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  toggleGood = (item: string) => {
    const { selectedGoods } = this.state;

    this.setState(prevState => ({
      selectedGoods: selectedGoods.includes(item)
        ? [...prevState.selectedGoods].filter(good => good !== item)
        : [...prevState.selectedGoods, item],
    }));
  };

  clearSelected = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__main">
          <h1 className="App__selected-list">
            {createSentence(selectedGoods)}
          </h1>

          {Boolean(selectedGoods.length) && (
            <button
              type="button"
              className="button-23 button-23--small"
              onClick={this.clearSelected}
            >
              ✕
            </button>
          )}
        </div>

        <ul className="App__goods-list">
          {goodsFromServer.map(item => (
            <li key={item} className="App__goods-item">
              <p className={(
                classNames(
                  'App__item',
                  { 'App__item--selected': selectedGoods.includes(item) },
                )
              )}
              >
                {item}
              </p>

              <button
                type="button"
                className="button-23"
                onClick={() => {
                  this.toggleGood(item);
                }}
              >
                {selectedGoods.includes(item) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
