/* eslint-disable no-nested-ternary */
import React from 'react';
import classNames from 'classnames';
import './App.scss';

const goodsFromServer: string[] = [
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

interface State {
  selectedGood: string[],
}

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  clearSelectedGood = () => {
    this.setState({ selectedGood: [] });
  };

  changeSelectedGood = (good: string) => {
    this.setState((prevState) => ({ selectedGood: [...prevState.selectedGood, good] }));
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <section className="products">
          <h1 className="products__title">
            <button
              type="button"
              className="products__close"
              disabled={selectedGood.length === 0}
              onClick={this.clearSelectedGood}
            >
              X
            </button>
            <>
              {selectedGood.join(selectedGood.length === 2 ? ' and ' : ', ') || 'No goods'}
              {selectedGood.length === 1 ? ' is ' : selectedGood.length > 1 ? ' are ' : ' '}
              selected
            </>
          </h1>
          <ul className="products__goods">
            {goodsFromServer.map((good) => (
              <>
                <button
                  className={classNames('products__button', { active__button: selectedGood.includes(good) })}
                  disabled={selectedGood.includes(good)}
                  type="button"
                  onClick={() => {
                    this.changeSelectedGood(good);
                  }}
                >
                  {selectedGood.includes(good) ? 'Added' : 'Add'}
                </button>
                <li
                  key={good}
                  className={classNames('products__good', { active: selectedGood.includes(good) })}
                >
                  {good}
                </li>
              </>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
