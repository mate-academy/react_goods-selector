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
  selectedGood: string[];
};

type Props = {};

export class App extends React.Component<Props, State> {
  state = {
    selectedGood: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState((state) => ({
      selectedGood: [...state.selectedGood, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((state) => {
      const selectedGoods = state.selectedGood;
      const index = selectedGoods.indexOf(good);

      selectedGoods.splice(index, 1);

      return { selectedGood: selectedGoods };
    });
  };

  clearGoods = () => {
    this.setState({ selectedGood: [] });
  };

  getText = (length: number, arr: string[]) => {
    if (length === 1) {
      return `Selected goods: ${arr[0]} is selected`;
    }

    if (length === 2) {
      return `Selected goods: ${arr.join(' and ')} are selected`;
    }

    if (length > 2) {
      const partWithoutLast = arr.slice(0, arr.length - 1);

      return `Selected goods: ${partWithoutLast.join(', ')} and ${arr[arr.length - 1]} are selected`;
    }

    return 'Selected good: No goods selected';
  };

  getKey = (str: string) => {
    let key = 0;

    for (let i = 0; i < str.length; i += 1) {
      key += str.charCodeAt(i);
    }

    return key.toString();
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.getText(selectedGood.length, selectedGood)}
        </h1>
        {selectedGood && (
          <button
            type="button"
            onClick={() => this.clearGoods()}
            className="Clear__button"
          >
            Clear
          </button>
        )}

        <ul className="App__list">
          {goodsFromServer.map((good) => {
            const key = this.getKey(good);

            return (
              <li
                className={classNames('App__link', {
                  selected: selectedGood.includes(good),
                })}
                key={key}
              >
                <span>{good}</span>
                <button
                  className={classNames('App__button', {
                    buttonRemove: selectedGood.includes(good),
                  })}
                  type="button"
                  onClick={() => {
                    if (selectedGood.includes(good)) {
                      return this.removeGood(good);
                    }

                    return this.selectGood(good);
                  }}
                >
                  {selectedGood.includes(good) ? 'Remove' : 'Select'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
