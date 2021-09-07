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
  selectedGoods: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: 'Jam',
  };

  selectedGood = (item: string) => {
    this.setState({ selectedGoods: item });
  };

  clearItem = () => {
    this.setState({ selectedGoods: '' });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__top">
          {selectedGoods
            ? <h1>{`Selected good: - ${selectedGoods}`}</h1>
            : <h1>No goods selected!</h1>}

          {selectedGoods && (
            <button
              type="button"
              className="App__button--clear button"
              onClick={() => this.clearItem()}
            >
              Clear
            </button>
          )}
        </div>

        <ul className="App__list-of-goods">
          {goodsFromServer.map(good => (
            <li
              className={classNames(
                { 'App__good-item': good === selectedGoods },
              )}
              key={good}
            >
              {good}
              {!(selectedGoods.includes(good)) && (
                <button
                  type="button"
                  className="App__goods-button button"
                  onClick={() => this.selectedGood(good)}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// const App: React.FC = () => (
//   <div className="App">
//     <h1>Selected good: -</h1>
//     {goodsFromServer.length}
//   </div>
// );

export default App;
