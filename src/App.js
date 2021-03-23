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
      const updatedGood = [...prevState.selectedGoods];

      updatedGood.push(good);

      return { selectedGoods: updatedGood };
    });
  }

  removeGood = (good) => {
    this.setState((prevState) => {
      const updatedGood = [...prevState.selectedGoods].filter(
        selectedGood => selectedGood !== good,
      );

      return { selectedGoods: updatedGood };
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGoods.length === 0 || (
          <button
            type="button"
            className="button"
            onClick={() => {
              this.resetGoods();
            }}
          >
            X
          </button>
          )}
          {formateTitle(selectedGoods)}
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
              {selectedGoods.includes(good) || (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.addGood(good);
                  }}
                >
                  Add
                </button>
              )}
              {!selectedGoods.includes(good) || (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.removeGood(good);
                  }}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function formateTitle(selectedGoods) {
  if (selectedGoods.length === 0) {
    return ('No goods selected');
  }

  if (selectedGoods.length === 1) {
    return (`${selectedGoods[0]} is selected`);
  }

  return (`
    ${selectedGoods
      .slice(0, selectedGoods.length - 1)
      .toString()
      .replace(/,/g, ', ')} and 
      ${selectedGoods[selectedGoods.length - 1]}
       are selected`
  );
}
