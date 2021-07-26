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

class App extends React.Component {
  state = {
    selectedGoods: 'Jam',
  };

  goodsBasket() {
    if (this.state.selectedGoods !== null) {
      return `${this.state.selectedGoods} is selected`;
    }

    return 'No goods selected';
  }

  render() {
    return (
      <div className="App border border-4 rounded-3">
        <h1 className="App__title">
          {this.goodsBasket()}
          <button
            type="button"
            className={
              this.state.selectedGoods === null
                ? 'invisible'
                : 'btn-close'
            }
            onClick={() => {
              this.setState({ selectedGoods: null });
            }}
          />
        </h1>
        <ul className="list-group list-group-flush">
          {goodsFromServer.map(good => (
            <div
              className="App__listItem"
              key={good}
            >
              <li
                className={good === this.state.selectedGoods
                  ? 'fw-normal'
                  : 'fw-bold'}
              >
                {good}
              </li>
              <button
                type="button"
                className={
                  good === this.state.selectedGoods
                    ? 'invisible'
                    : 'btn btn-success shadow'
                }
                onClick={() => {
                  this.setState({ selectedGoods: good });
                }}
              >
                Select
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
