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

  clearSelectedGoodList = () => {
    this.setState({ selectedGoods: [] });
  };

  removeGoodFromSelected = (removingGood) => {
    this.setState((prevState) => {
      const updatedSelectedGoods = [...prevState.selectedGoods].filter(
        good => good !== removingGood,
      );

      return { selectedGoods: updatedSelectedGoods };
    });
  }

  render() {
    const { selectedGoods } = this.state;
    const goodsListLength = selectedGoods.length;

    return (
      <div className="App">
        <h1 className="header">
          {createHeader(selectedGoods, goodsListLength)}
        </h1>

        <button
          type="button"
          className={classNames('button', { hidden: goodsListLength === 0 })}
          onClick={() => {
            this.clearSelectedGoodList();
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

function createHeader(selectedGoods, goodsListLength) {
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

  return headerText;
}

export default App;
