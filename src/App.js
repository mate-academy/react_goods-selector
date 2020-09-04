import React from 'react';
import classnames from 'classnames';

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
    selectedGood: '',
  };

  selectedGoodHandler = (good) => {
    this.setState({
      selectedGood: good,
    });
  };

  clearGoodsListHandler = () => {
    this.setState({
      selectedGood: '',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {
          selectedGood && (
            <button
              onClick={this.clearGoodsListHandler}
              className="clear"
              type="button"
            >
              Clear
            </button>
          )
        }
        <h1>{`Selected good: ${selectedGood}`}</h1>

        {goodsFromServer.map(good => (
          <button
            key={good}
            onClick={e => this.selectedGoodHandler(good)}
            className={classnames({
              button: true,
              active: this.state.selectedGood === good,
            })}
            type="button"
          >
            {good}
          </button>
        ))}

      </div>
    );
  }
}

export default App;
