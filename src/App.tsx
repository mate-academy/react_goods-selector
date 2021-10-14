import classNames from 'classnames';
import React from 'react';
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
  selectedGoods: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  clearItem = () => {
    this.setState({ selectedGoods: '' });
  };

  selectedGood = (item: string) => {
    this.setState({ selectedGoods: item });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__top">
          <h1>
            {selectedGoods
              ? `${selectedGoods} is selected`
              : 'No goods selected!'}
          </h1>

          {selectedGoods && (
            <button
              type="button"
              className="button"
              onClick={this.clearItem}
            >
              X
            </button>
          )}
        </div>

        <ul className="App__list-of-goods">
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                { 'App__good-item': good === selectedGoods },
              )}
              key={good}
            >
              {good}
              {!(selectedGoods.includes(good)) && (
                <button
                  type="button"
                  className="button"
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
