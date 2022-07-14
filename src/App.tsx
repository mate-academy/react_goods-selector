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

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  renderTitle = (goods: string[]) => {
    switch (goods.length) {
      case (0):
        return 'No goods selected.';
      case (1):
        return (
          <>
            {`${goods} is selected.`}
            <button
              type="button"
              className="App__clearButton"
              onClick={() => this.removeAllGoods()}
            >
              Clear
            </button>
          </>
        );
      default:
        return (
          <>
            {`${goods.slice(0, goods.length - 1).join(', ')} and ${goods[goods.length - 1]} are selected.`}
            <button
              type="button"
              className="App__clearButton"
              onClick={() => this.removeAllGoods()}
            >
              Clear
            </button>
          </>
        );
    }
  };

  selectGood = (good: string) => {
    this.setState((state) => (
      { selectedGoods: [...state.selectedGoods, good] }
    ));
  };

  removeGood = (goodToRemove: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(
        good => good !== goodToRemove,
      ),
    }
    ));
  };

  removeAllGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    const { selectGood, removeGood, renderTitle } = this;

    return (
      <div className="App">
        <h1 className="App__title">
          {renderTitle(selectedGoods)}
        </h1>
        <ul className="App__list">
          {goodsFromServer.map(good => {
            return selectedGoods.includes(good)
              ? (
                <li className="App__listItem App__listItem--selected">
                  {good}
                  {' - '}
                  <button
                    type="button"
                    className="
                      App__listItemButton
                      App__listItemButton--toRemove
                    "
                    onClick={() => removeGood(good)}
                  >
                    Remove
                  </button>
                </li>
              )
              : (
                <li className="App__listItem">
                  {good}
                  {' - '}
                  <button
                    type="button"
                    className="
                      App__listItemButton
                      App__listItemButton--toSelect
                    "
                    onClick={() => selectGood(good)}
                  >
                    Select
                  </button>
                </li>
              );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
