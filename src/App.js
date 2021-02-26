import React from 'react';
import './App.scss';
import className from 'classnames';

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
    selectedGood: [],
  }

  selectedGood = (e, good) => {
    if (e.target.textContent === 'add') {
      this.setState((state) => {
        state.selectedGood.push(good);

        return ({
          selectedGood: state.selectedGood,
        });
      });
    } else {
      this.setState((state) => {
        const goods = state.selectedGood.filter(el => el !== good);

        return ({
          selectedGood: goods,
        });
      });
    }
  }

  render() {
    const { selectedGood } = this.state;
    const { length } = selectedGood;
    const lastGood = ` and ${selectedGood[length - 1]}`;

    const allGoods = length === 1
      ? selectedGood
      : selectedGood.slice(0, length - 1).join(', ') + lastGood;

    return (
      <>
        <div className="App">
          <h1 className="state">
            Selected good:
            {' '}
            {!length ? 'No goods selected' : `${allGoods} is selected`}
          </h1>
          <div className="goods">
            {goodsFromServer.map(good => (
              <div className={className({
                list: true,
                selected: selectedGood.includes(good),
              })}
              >
                <div
                  key={good}
                  className={className({ list_element: true })}
                >
                  {good}
                </div>
                <div>
                  <button
                    type="button"
                    className="button"
                    onClick={e => this.selectedGood(e, good)}
                  >
                    {selectedGood.includes(good) ? 'remove' : 'add'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
