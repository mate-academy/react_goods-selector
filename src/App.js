import React from 'react';
import classNames from 'classnames';
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
    selectedGoods: [],
  };

  addGoodToSelected = (good) => {
    this.setState((prevState) => {
      const updatedSelectedGoods = [...prevState.selectedGoods];

      updatedSelectedGoods.push(good);

      return { selectedGoods: updatedSelectedGoods };
    });
  }

  removeGoodFromSelected(removingGood) {
    this.setState((prevState) => {
      const updatedSelectedGoods = [...prevState.selectedGoods];
      const goodIndex = updatedSelectedGoods.findIndex(
        item => item === removingGood,
      );

      updatedSelectedGoods.splice(goodIndex, 1);

      return { selectedGoods: updatedSelectedGoods };
    });
  }

  render() {
    const { selectedGoods } = this.state;
    const goodsListLength = selectedGoods.length;

    let headerText = '';

    if (goodsListLength === 0) {
      headerText = 'No goods selected';
    } else if (goodsListLength === 1) {
      headerText = `${selectedGoods[0]} is selected`;
    } else {
      headerText = `
        ${selectedGoods.slice(0, goodsListLength - 1)
    .toString().replace(/,/g, ', ')}
          and ${selectedGoods[goodsListLength - 1]} are selected
      `;
    }

    return (
      <div className="App">
        <h1 className="header">
          {headerText}
        </h1>

        <button
          type="button"
          className={classNames('button', { hidden: goodsListLength === 0 })}
          onClick={() => {
            this.setState({ selectedGoods: [] });
          }}
        >
          X
        </button>

        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <span
                className={
                  classNames('good-name', {
                    selected: selectedGoods.includes(good),
                  })
                }
              >
                {good}
              </span>

              <button
                type="button"
                className={
                  classNames('button', { hidden: selectedGoods.includes(good) })
                }
                onClick={() => {
                  this.addGoodToSelected(good);
                }}
              >
                Select
              </button>

              <button
                type="button"
                className={
                  classNames(
                    'button', { hidden: !selectedGoods.includes(good) },
                  )
                }
                onClick={() => {
                  this.removeGoodFromSelected(good);
                }}
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
