/* eslint-disable object-shorthand */
/* eslint-disable no-nested-ternary */
import React from 'react';
import './App.scss';

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

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  selectGood(good) {
    const { selectedGoods } = this.state;

    selectedGoods.push(good);
    this.setState({ selectedGoods: selectedGoods });
  }

  removeGood(good) {
    const { selectedGoods } = this.state;

    selectedGoods.splice(selectedGoods.indexOf(good), 1);

    this.setState({ selectedGoods: selectedGoods });
  }

  clearSelected() {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">
          {
            selectedGoods.length !== 0
              ? selectedGoods.length === 1
                ? `${selectedGoods} is selected`
                // eslint-disable-next-line max-len
                : `${selectedGoods.join(', ').replace(/, ([^,]*)$/, ' and $1')} are selected`
              : `No goods selected`
          }
          {' '}
          <button
            type="button"
            className={
              selectedGoods.length === 0
                ? 'hidden'
                : 'App__clearSelected'
            }
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            X
          </button>
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                selectedGoods.includes(good)
                  ? 'App__element--active'
                  : 'App__element'
                }
            >
              <span>{good}</span>
              <button
                type="button"
                className={
                  selectedGoods.includes(good)
                    ? 'hidden'
                    : 'clickable'
                }
                onClick={() => {
                  this.selectGood(good);
                }}
              >
                Add
              </button>
              <button
                type="button"
                className={
                  selectedGoods.includes(good)
                    ? 'clickable'
                    : 'hidden'
                }
                onClick={() => {
                  this.removeGood(good);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
