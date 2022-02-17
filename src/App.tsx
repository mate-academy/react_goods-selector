import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

  addGood = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  checkedGood = (good: string) => {
    return this.state.selectedGood === good;
  };

  checkedButtom = (good: string) => {
    return this.checkedGood(good) ? 'Remove' : 'Add';
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="goods__title title">
          <h1 className="title__text">
            {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          </h1>
          {selectedGood && (
            <button
              type="button"
              className="title__button"
              onClick={this.clearGood}
            >
              X
            </button>
          )}
        </div>
        <ul className="goods__list-wrapp">
          {goodsFromServer.map(good => (
            <div className="goods__list">
              <li
                key={good}
                className={classNames('goods__item', {
                  'goods__item--isSelected':
                   selectedGood === good,
                })}
              >
                {good}
              </li>
              <button
                type="button"
                className="goods__button"
                onClick={() => (
                  this.checkedGood(good) ? this.clearGood() : this.addGood(good)
                )}
              >
                {this.checkedButtom(good)}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
