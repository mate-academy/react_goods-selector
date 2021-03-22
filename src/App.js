import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

export default class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  resetGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  addGood = (good) => {
    this.setState((prevState) => {
      const updated = [...prevState.selectedGoods];

      updated.push(good);

      return { selectedGoods: updated };
    });
  }

  removeGood = (removingGood) => {
    this.setState((prevState) => {
      const updated = [...prevState.selectedGoods].filter(
        good => good !== removingGood,
      );

      return { selectedGoods: updated };
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          <button
            type="button"
            className={classNames('button',
              { hidden: selectedGoods.length === 0 })}
            onClick={() => {
              this.resetGoods();
            }}
          >
            X
          </button>
          {createTitle(selectedGoods, selectedGoods.length)}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                classNames('good-name', {
                  selected: selectedGoods.includes(good),
                })
              }
            >
              {good}
              {'   '}
              <button
                type="button"
                className={
                  classNames('button', { hidden: selectedGoods.includes(good) })
                }
                onClick={() => {
                  this.addGood(good);
                }}
              >
                Add
              </button>

              <button
                type="button"
                className={
                  classNames(
                    { hidden: !selectedGoods.includes(good) },
                  )
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

function createTitle(selectedGoods, goodsListLength) {
  if (goodsListLength === 0) {
    return ('No goods selected');
  }

  if (goodsListLength === 1) {
    return (`${selectedGoods[0]} is selected`);
  }

  return (`
    ${selectedGoods
      .slice(0, goodsListLength - 1)
      .toString()
      .replace(/,/g, ', ')} and 
      ${selectedGoods[goodsListLength - 1]}
       are selected`
  );
}
