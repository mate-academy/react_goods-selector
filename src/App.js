import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    selectedGood: '',
  }

  selectGoods = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  removeSelection = () => {
    this.setState({
      selectedGood: '',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="goods">
          <h1 className="goods__title">
            {`Selected good: - ${selectedGood}`}
          </h1>
          <button
            onClick={() => this.removeSelection()}
            type="submit"
            className={classNames('goods__clear', {
              invisible: !selectedGood,
            })}
          >
            X
          </button>
          {goodsFromServer.map(good => (
            <button
              key={good}
              onClick={() => this.selectGoods(good)}
              type="submit"
              className={classNames('goods__button', {
                goods__button_selected: selectedGood === good,
              })}
            >
              {good}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
