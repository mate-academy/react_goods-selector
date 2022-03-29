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

  removeGood = (good: string) => this.setState(
    (state) => ({
      selectedGoods: state.selectedGoods.filter(el => el !== good),
    }),
  );

  clearAll = () => this.setState({
    selectedGoods: [],
  });

  showSelectedRow = (selectedGoods: string[]) => {
    const selected = [...selectedGoods];

    switch (selected.length) {
      case 0:
        return ' No goods selected';

      case 1:
        return ` ${selected[0]} are selected`;

      default:
      {
        const last = selected.pop();

        return ` ${selected.join(', ')} and ${last} are selected`;
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
                ? 'button_hide'
                : 'button_show'
            }`}
            onClick={
              () => this.clearAll()
            }
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
                  className={`list__item ${isSelected ? 'list__item_active' : ''}`}
                >
                  {good}
                  {
                    isSelected
                      ? (
                        <button
                          type="button"
                          className="button button_color-red"
                          onClick={() => this.removeGood(good)}
                        >
                          Remove
                        </button>
                      )
                      : (
                        <button
                          type="button"
                          className="button"
                          onClick={() => this.selectGood(good)}
                        >
                          Add
                        </button>
                      )
                  }
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
