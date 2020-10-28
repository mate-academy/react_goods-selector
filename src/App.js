import React from 'react';
import Button from './components/Button/Button';
import './App.scss';

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
    selectedGoods: [],
  }

  chooseGood(good) {
    this.setState(
      prevState => ({ selectedGoods: [...prevState.selectedGoods, good] }),
    );
  }

  removeGood(good) {
    this.setState((prevState) => {
      const newList = prevState.selectedGoods.filter(item => item !== good);

      return { selectedGoods: newList };
    });
  }

  clearGoods() {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="app">
        <h1 className="app__header">
          Selected goods:
          <span className="app__header-list">
            {' '}
            {selectedGoods.join(', ')}
          </span>
        </h1>
        <button
          className="app__button-clear"
          type="button"
          onClick={() => this.clearGoods()}
        >
          X
        </button>
        <ul className="app__list">
          {goodsFromServer.map(
            (good) => {
              const isSelected = selectedGoods.some(item => item === good);
              const className
                = `app__good ${isSelected ? 'app__good--is-active' : ''}`;

              return (
                <li
                  className={className}
                  key={good}
                >
                  {isSelected
                    ? (
                      <Button
                        text="Remove"
                        onClick={() => this.removeGood(good)}
                      />
                    )
                    : (
                      <Button
                        text="Add"
                        onClick={() => this.chooseGood(good)}
                      />
                    )
                  }
                  {' '}
                  {good}
                </li>
              );
            },
          )}
        </ul>
      </div>
    );
  }
}

export default App;
