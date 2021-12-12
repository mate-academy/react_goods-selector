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
  goods: string;
};

class App extends React.Component<{}, State> {
  state = {
    goods: 'Jam',
  };

  clearSelection = () => {
    this.setState({
      goods: '',
    });
  };

  selectGood = (newGood: string) => {
    this.setState({
      goods: newGood,
    });
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          { goods ? `Selected product is ${goods}` : 'No goods added'}
          <button
            className={this.state.goods ? 'button__clear' : 'button__hidden'}
            type="button"
            onClick={this.clearSelection}
          >
            X
          </button>
        </h1>
        <ul className="goods__list">
          {goodsFromServer.map((goodsName) => (
            <li
              key={goodsName}
              className={this.state.goods !== goodsName ? 'good__item' : 'good__item-selected'}
            >
              {goodsName}
              <button
                className={this.state.goods !== goodsName ? 'button__select' : 'button__hidden'}
                type="button"
                onClick={() => this.selectGood(goodsName)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
