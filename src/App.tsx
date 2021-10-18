// import { type } from 'os';
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
  selectedGood: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  isSelected = (good: string, allGoods: string[]) => {
    this.setState({ selectedGood: [...allGoods, good] });
  };

  clearState = () => {
    this.setState({ selectedGood: [] });
  };

  isGoodsClear = () => {
    if (this.state.selectedGood.length === 0) {
      return 'No goods';
    }

    return 'is';
  };

  render() {
    return (
      <>
        <button
          className="button"
          type="button"
          onClick={this.clearState}
        >
          X
        </button>
        <h1>
          {this.state.selectedGood.join(' and ')}
          {` ${this.isGoodsClear()}`}
          {' '}
          selected
        </h1>
        <ul>
          {goodsFromServer.map(good => {
            const isSelected = this.state.selectedGood.includes(good);

            return (
              <>
                <li>{good}</li>
                {!isSelected
                  && (
                    <button
                      className="button"
                      type="button"
                      onClick={
                        () => {
                          this.isSelected(good, this.state.selectedGood);
                        }
                      }
                    >
                      Add
                    </button>
                  )}
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
