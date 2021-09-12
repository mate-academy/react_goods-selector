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
  selectedGoods: string[];
};

type Props = {};

class App extends React.PureComponent<Props, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods.filter(item => item !== good)],
    }));
  };

  render() {
    const { selectedGoods } = this.state;

    let preparedGoods = selectedGoods;

    if (selectedGoods.length > 1) {
      const firstPart = selectedGoods.slice(0, selectedGoods.length - 1).join(', ');

      preparedGoods = [firstPart, 'and', selectedGoods[selectedGoods.length - 1]];
    }

    return (
      <div
        className="App"
      >
        <h1 className="App__header">
          Selected good
          {preparedGoods.length > 1 && 's'}
          :
        </h1>
        <div className="App__basket">
          {!!selectedGoods.length || 'No good'}
          {preparedGoods.join(' ')}
          {preparedGoods.length > 1 ? ' are ' : ' is '}
          selected
          {!selectedGoods.length || (
            <button
              className="App__button"
              type="button"
              onClick={() => this.setState({ selectedGoods: [] })}
              title="click to clear the basket"
            >
              X
            </button>
          )}
        </div>

        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li>
              <div className="App__item">
                <span
                  className={classNames('App__item-text', {
                    'App__item-text-decorated': selectedGoods.includes(good),
                  })}
                >
                  {good}
                </span>
                {selectedGoods.includes(good)
                  ? (
                    <button
                      className="App__button-remove"
                      type="button"
                      onClick={() => this.removeGood(good)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      className="App__button-add"
                      type="button"
                      onClick={() => this.addGood(good)}
                    >
                      Select
                    </button>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
