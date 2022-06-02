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
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  handleClick = (good: string) => {
    if (this.state.selectedGood.includes(good)) {
      this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        selectedGood: this.state.selectedGood
          .filter(el => el !== good),
      });
    } else {
      this.setState({
        // eslint-disable-next-line react/no-access-state-in-setstate
        selectedGood: [...this.state.selectedGood, good],
      });
      // eslint-disable-next-line no-console
      console.log(this.state.selectedGood);
    }
  };

  clearGoods = () => {
    this.setState({
      selectedGood: [],
    });
  };

  checkGoods = (goods: string[]) => {
    switch (goods.length) {
      case 0:
        return 'No selected good';
      case 1:
        return `${goods[0]} is selected`;
      case 2:
        return `${goods.join(' and ')} are selected`;
      default:
        return `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="subtitle is-1">
          Selected good:
          <p className="subtitle is-2">{this.checkGoods(selectedGood)}</p>
          <button
            type="button"
            className={classNames(
              'button is-danger is-light',
              { nonVisible: selectedGood.length === 0 },
            )}
            onClick={this.clearGoods}
          >
            Clear
          </button>
        </h1>
        <ul>
          {goodsFromServer.map((good) => (
            <li className="box subtitle is-4" key={good}>
              <button
                type="button"
                className={classNames(
                  'button',
                  { 'is-warning is-light': selectedGood.includes(good) },
                )}
                onClick={() => {
                  this.handleClick(good);
                }}
              >
                {selectedGood.includes(good) ? 'Remove' : 'Select'}
              </button>
              <span className={classNames(
                'active',
                { active__selected: selectedGood.includes(good) },
              )}
              >
                {good}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
