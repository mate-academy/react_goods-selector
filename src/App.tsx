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

type State = {
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  clearGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  addGood(good: string) {
    this.setState({
      selectedGood: good,
    });
  }

  checkedGood(good: string) {
    return this.state.selectedGood === good;
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="goods__title">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}

          <button
            type="button"
            className="goods__clear"
            onClick={this.clearGood}
          >
            X
          </button>
        </h1>

        <ul>
          {goodsFromServer.map((good) => (
            <div className="goods__list">
              <li
                key={good}
                className={classNames('goods__item', {
                  'goods__item--isSelected':
                   this.state.selectedGood === good,
                })}
              >
                {good}
              </li>
              <button
                type="button"
                className="goods__button"
                onClick={() => (
                  this.checkedGood(good)
                    ? this.clearGood()
                    : this.addGood(good)
                )}
              >
                {this.checkedGood(good)
                  ? 'Remove'
                  : 'Add'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
