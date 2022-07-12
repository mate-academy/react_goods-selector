import { Component } from 'react';
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
  goods: string[],
  selectedGoods: string[],
};

class App extends Component<{}, State> {
  state: Readonly<State> = {
    goods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: selectedGoods.filter(choosen => choosen !== good),
    }));
  };

  clearBasket = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { goods, selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="goodsSelector">
          <ul className="listOfGoods box">
            {goods.map(good => (
              <li
                key={good}
                className={classNames({
                  listOfGoods__item: true,
                  'listOfGoods__item--active': selectedGoods.includes(good),
                })}
              >
                <span className="good">
                  {good}
                </span>
                {selectedGoods.includes(good)
                  ? (
                    <button
                      className="button is-info"
                      type="button"
                      onClick={() => this.removeGood(good)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      className="button is-primary"
                      type="button"
                      onClick={() => this.selectGood(good)}
                    >
                      Select
                    </button>
                  )}
              </li>
            ))}
          </ul>
          <h1 className="subtitle is-3">{`${selectedGoods.join(', ') || 'Nothing'} ${(selectedGoods.length > 1) ? 'are' : 'is'} selected`}</h1>
          {selectedGoods.length !== 0 && (
            <button
              className="button is-danger is-rounded"
              type="button"
              onClick={this.clearBasket}
            >
              Clear
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
