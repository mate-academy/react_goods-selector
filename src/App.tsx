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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  adder = (word: string) => {
    this.setState(prevState => ({ selectedGoods: [...prevState.selectedGoods, word] }));
  };

  render(): React.ReactNode {
    const { selectedGoods } = this.state;
    const AnyGoodSelected = this.state.selectedGoods.length !== 0;

    return (
      <div className="App">
        <h1 className="title">
          Selected good:
          {' '}
          {selectedGoods.join(', ')}
          {' '}
          {AnyGoodSelected ? (
            <>
              selected
              {' '}
              <button
                type="button"
                onClick={() => {
                  this.setState({ selectedGoods: [] });
                }}
              >
                X
              </button>
            </>
          ) : (
            <>
              No any selections
            </>
          )}
        </h1>
        <ul className="list">
          {goodsFromServer.map((good) => {
            const isSelected = this.state.selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={classNames({
                  selected: isSelected,
                  nonSelected: !isSelected,
                })}
              >
                {good}
                {' '}
                {!isSelected && (
                  <button
                    type="button"
                    onClick={() => {
                      this.adder(good);
                    }}
                  >
                    select
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
