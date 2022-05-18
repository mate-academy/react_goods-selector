import React from 'react';
import './App.scss';
import className from 'classnames';

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

type StateType = {
  selectedGood: string[]
};

export class App extends React.Component<{}, StateType> {
  state = {
    selectedGood: ['Jam'],
  };

  showGoods = (goodsArr: string[]) => (
    goodsArr.length > 1
      ? `${goodsArr.slice(0, goodsArr.length - 1).join(', ')}
      and ${goodsArr[goodsArr.length - 1]}`
      : goodsArr
  );

  selectGood = (good: string) => {
    if (this.state.selectedGood.includes(good)) {
      this.setState((state) => ({
        selectedGood: state.selectedGood.filter(e => e !== good),
      }));
    } else {
      this.setState((state) => ({
        selectedGood: [...state.selectedGood, good],
      }));
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {selectedGood.length
            ? (this.showGoods(selectedGood))
            : 'Nothing slected'}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={goodsFromServer.indexOf(good)}
              className={className(
                'good',
                { 'good--selected': selectedGood.includes(good) },
              )}
            >
              {good}
              <button
                type="button"
                onClick={
                  () => this.selectGood(good)
                }
              >
                {selectedGood.includes(good) ? 'Remove' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => this.setState({ selectedGood: [] })}
        >
          Clear
        </button>
      </div>
    );
  }
}
