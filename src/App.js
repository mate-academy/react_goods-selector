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
    selected: '',
  }

  selectGood = (good) => {
    this.setState({
      selected: good,
    });
  };

  render() {
    const { selected } = this.state;

    return (
      <div>
        <h1>{`Selected good - ${selected}`}</h1>
        <ul className="goods">
          {goodsFromServer.map(good => (
            <li>
              <button
                type="button"
                onClick={() => this.selectGood(good)}
                className={good === selected
                  ? 'selected goods__item'
                  : 'goods__item'
                }
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="clear"
          onClick={() => {
            this.setState({
              selected: '',
            });
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
