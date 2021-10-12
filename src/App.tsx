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
  selectedGood: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: [goodsFromServer[0]],
  };

  addGood = (good: string) => {
    if (this.state.selectedGood.includes(good)) {
      return;
    }

    this.setState(({ selectedGood }) => ({
      selectedGood: [...selectedGood, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState(({ selectedGood }) => ({
      selectedGood: selectedGood.filter(item => item !== good),
    }));
  };

  showSelectedGoodsList = () => (
    <ul className="selected-list">
      {this.state.selectedGood.length !== 0
        ? this.state.selectedGood.map(good => (
          <li className="selected-list__item">
            {good}
          </li>
        )) : (
          <li className="selected-list__item">
            No goods are selected
          </li>
        )}
    </ul>
  );

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="App__info info">
          <div className="info__header header">
            <button
              className={classNames(
                'clear-button',
                { 'clear-button--hidden': selectedGood.length === 0 },
              )}
              type="button"
              onClick={() => {
                this.setState({ selectedGood: [] });
              }}
            >
              X
            </button>
            <h1 className="header__title">Selected goods:</h1>
          </div>
          {this.showSelectedGoodsList()}
          <p><strong>Click to select, double click to remove</strong></p>
        </div>
        <ul className="goods-list">
          {goodsFromServer.map(good => (
            <li
              key={goodsFromServer.indexOf(good)}
              className={classNames(
                'goods-list__item',
                { 'goods-list__item--selected': selectedGood.includes(good) },
              )}
            >
              {good}
              <button
                className="addRemove-button"
                type="button"
                onClick={() => {
                  this.addGood(good);
                }}
                onDoubleClick={() => {
                  this.removeGood(good);
                }}
              >
                Add/Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
