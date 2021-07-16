import classNames from 'classnames';
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
    selectedGoods: [],
  }

  addGood(good) {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  }

  removeGood(good) {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(currentGood => (
        currentGood !== good
      )),
    }));
  }

  render() {
    const { selectedGoods } = this.state;
    let message = 'No goods selected.';

    if (selectedGoods.length === 1) {
      message = `${selectedGoods[0]} is selected.`;
    } else if (selectedGoods.length > 1) {
      const lastElement = selectedGoods[selectedGoods.length - 1];
      const mainPartOfMessage = selectedGoods
        .slice(0, selectedGoods.length - 1)
        .join(', ');

      message = `${mainPartOfMessage} and ${lastElement} are selected.`;
    }

    return (
      <div className="App">
        <h1>{`Selected good: -${message}`}</h1>
        <button
          type="button"
          className="App__button"
          onClick={() => {
            this.setState({ selectedGoods: [] });
          }}
        >
          X
        </button>
        <ul className="App__list">
          {goodsFromServer.map((good) => {
            const isSelected = selectedGoods.some(currentGood => (
              currentGood === good
            ));

            return (
              <li key={Math.random()} className="App__item">
                <span
                  className={
                    classNames(
                      'App__good', { 'App__good--selected': isSelected },
                    )
                  }
                >
                  {good}
                </span>
                {!isSelected
                  ? (
                    <button
                      type="button"
                      className="App__button App__button--add"
                      onClick={() => {
                        this.addGood(good);
                      }}
                    >
                      Add
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="App__button"
                      onClick={() => {
                        this.removeGood(good);
                      }}
                    >
                      Remove
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
