import React from 'react';
import './App.scss';

const goodsFromServer = [
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

export class App extends React.Component {
  state = {
    selectedGood: goodsFromServer[8],
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {this.state.selectedGood}
        </h1>
        {goodsFromServer.length}
        <ul>
          {
            goodsFromServer.map(good => (
              <li
                key={good}
                onClick={() => {
                  this.setState({
                    selectedGood: good,
                  });
                }}
                className={
                (good === this.state.selectedGood) ? 'isActive' : ''
              }
              >
                {good}
              </li>
            ))
          }
        </ul>
        <button
          type="button"
          onClick={() => {
            const newPositionInItem = goodsFromServer.findIndex(
              indexOfPosInList => indexOfPosInList === this.state.selectedGood,
            ) + 1;

            this.setState({
              selectedGood: newPositionInItem === goodsFromServer.length
                ? goodsFromServer[0]
                : goodsFromServer[newPositionInItem],
            });
          }
          }
        >
          Select
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              selectedGood: 'No goods selected',
            });
          }}
        >
          X
        </button>
      </div>
    );
  }
}
