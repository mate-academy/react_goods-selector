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
  selectedGoods: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  clearGood = () => {
    this.setState({ selectedGoods: '' });
  };

  selectedGood = (good: string) => {
    this.setState({ selectedGoods: good });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__title">
          <h1 className="App__title-title">
            {selectedGoods
              ? `${selectedGoods} is selected`
              : 'No selected!'}
          </h1>

          {selectedGoods && (
            <button
              type="button"
              className="App__title-btn"
              onClick={this.clearGood}
            >
              X
            </button>
          )}
        </div>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                'list__item', { active: good === selectedGoods },
              )}
              key={good}
            >
              {good}
              {!(selectedGoods.includes(good)) && (
                <button
                  type="button"
                  className="list__btn"
                  onClick={() => this.selectedGood(good)}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
