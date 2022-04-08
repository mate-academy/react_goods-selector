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
  selectedGoods: string[],
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => this.setState(
    (state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }),
  );

  removeGood = (selectedGood: string) => this.setState(
    (state) => ({
      selectedGoods: state.selectedGoods.filter(good => good !== selectedGood),
    }),
  );

  clearAll = () => this.setState({
    selectedGoods: [],
  });

  showSelectedRow = (selectedGoods: string[]) => {
    const copiedGoods = [...selectedGoods];

    switch (copiedGoods.length) {
      case 0:
        return ' No goods selected';

      case 1:
        return ` ${copiedGoods[0]} are selected`;

      default:
      {
        const last = copiedGoods.pop();

        return ` ${copiedGoods.join(', ')} and ${last} are selected`;
      }
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">

          Selected good
          {selectedGoods.length > 1 && 's'}
          :
          {this.showSelectedRow(selectedGoods)}
          <button
            type="button"
            className={`button ${
              !selectedGoods.length
                ? 'button__hide'
                : 'button__show'
            }`}
            onClick={() => this.clearAll()}
          >
            X
          </button>
        </h1>
        <ul className="list">
          {
            goodsFromServer.map((good) => {
              const isSelected = selectedGoods.some(el => el === good);

              return (
                <li
                  key={good}
                  className={`list__item ${isSelected ? 'list__item--active' : ''}`}
                >
                  {good}
                  <button
                    type="button"
                    className={`button ${isSelected ? 'button__color-red' : ''}`}
                    onClick={(
                      isSelected
                        ? () => this.removeGood(good)
                        : () => this.selectGood(good)
                    )}
                  >
                    {isSelected ? 'Remove' : 'Select'}
                  </button>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
