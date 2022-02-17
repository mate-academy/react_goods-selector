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
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  toggleSelection = (
    event: React.MouseEvent,
    selectedGood: string,
  ) => {
    const button = event.target as HTMLElement;
    const buttonText = button.textContent;
    const { addGood, removeGood } = this;

    switch (buttonText) {
      case 'Add':
        addGood(selectedGood);
        button.textContent = 'Remove';
        break;

      case 'Remove':
        removeGood(selectedGood);
        button.textContent = 'Add';
        break;

      default:
        break;
    }
  };

  getStringOfSelected = (goods: string[]) => {
    const lastGood = goods[goods.length - 1];
    const goodsExceptOfLast = goods.slice(0, -1).join(', ');

    switch (goods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goods[0]} is selected`;
      default:
        return `${goodsExceptOfLast} and ${lastGood} are selected`;
    }
  };

  removeAllGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  addGood = (selectedGood: string) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, selectedGood],
    }));
  };

  removeGood = (selectedGood: string) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(
        good => selectedGood !== good,
      ),
    }));
  };

  render() {
    const {
      toggleSelection,
      getStringOfSelected,
      removeAllGoods,
      state,
    } = this;
    const { selectedGoods } = state;
    const isAnyGoodSelected = selectedGoods.length > 0;

    return (
      <div className="App">
        <h1 className="App__title">
          {getStringOfSelected(selectedGoods)}
          {isAnyGoodSelected && (
            <button type="button" onClick={removeAllGoods}>
              X
            </button>
          )}
        </h1>

        <ul className="App__list">
          {goodsFromServer.map((good) => {
            const isSelected = selectedGoods.includes(good);
            const buttonText = isSelected
              ? 'Remove'
              : 'Add';

            return (
              <li className="App__item" key={good}>
                <p
                  className={
                    classNames(
                      'App__item-title',
                      {
                        selected: isSelected,
                      },
                    )
                  }
                >
                  {good}
                </p>

                <button
                  type="button"
                  onClick={(event) => {
                    toggleSelection(event, good);
                  }}
                >
                  {buttonText}
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
