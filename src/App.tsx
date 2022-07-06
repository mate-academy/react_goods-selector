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

interface State {
  selectedGoods: string[],
}

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clear = () => {
    this.setState({ selectedGoods: [] });
  };

  select = (good: string) => {
    if (!this.state.selectedGoods.includes(good)) {
      this.setState((current) => ({
        selectedGoods: [...current.selectedGoods, good],
      }));
    } else {
      this.setState((current) => (
        { selectedGoods: current.selectedGoods.filter(item => item !== good) }
      ));
    }
  };

  message = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">
            {this.message()}
          </h1>
          <button
            type="button"
            className={classNames('App__button', {
              'App__button--hidden': selectedGoods.length === 0,
            })}
            onClick={this.clear}
          >
            clear
          </button>
          <ul className="App__list">
            {goodsFromServer.map((good) => (
              <li
                key={good}
                className={classNames('App__item', {
                  'App__item--selected': selectedGoods.includes(good),
                })}
              >
                {good}
                <button
                  type="button"
                  className="App__button"
                  onClick={() => {
                    this.select(good);
                  }}
                >
                  {selectedGoods.includes(good) ? 'Remove' : 'Select '}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
