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
    selectedGood: '-',
    prevGood: null,
  };

  selectGood = (event, good) => {
    const { prevGood } = this.state;
    const resetButton = document.querySelector('.heading__button');

    this.setState({ selectedGood: good });

    if (prevGood) {
      prevGood.classList.remove('button--good-selected');
      this.setState({ prevGood: null });
    }

    event.target.classList.add('button--good-selected');
    this.setState({ prevGood: event.target });
    resetButton.classList.remove('button--hidden');
  };

  resetSelection = () => {
    const { prevGood } = this.state;
    const resetButton = document.querySelector('.heading__button');

    this.setState({ selectedGood: '-' });
    prevGood.classList.remove('button--good-selected');
    resetButton.classList.toggle('button--hidden');
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="heading">
          <h1 className="heading__title">
            Selected good:
          </h1>

          <span className="heading__good">
            {selectedGood}
          </span>

          <button
            type="button"
            className="heading__button button button--reset button--hidden"
            onClick={() => {
              this.resetSelection();
            }}
          />
        </div>

        <ul className="goods">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="goods__item"
            >
              <button
                type="button"
                className="goods__button button"
                onClick={(event) => {
                  this.selectGood(event, good);
                }}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
