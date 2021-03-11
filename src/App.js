import React from 'react';
import './App.scss';
import ClassNames from 'classnames';

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
    goods: goodsFromServer,
    selectedGood: 'Jam',
  }

  setSelection = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  resetSelection = () => {
    this.setState({
      selectedGood: null,
    });
  }

  render() {
    const { goods, selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood ? (
            <>
              {selectedGood}
              {' '}
              is selected
              <button
                type="button"
                onClick={this.resetSelection}
                className={ClassNames({
                  hidden: !selectedGood,
                })}
              >
                X
              </button>
            </>
          ) : 'No goods selected'}
        </h1>
        <ul>
          {goods.map(good => (
            <li
              key={good}
              className={ClassNames({
                active: good === selectedGood,
              })}
            >
              {good}
              <button
                type="button"
                onClick={() => this.setSelection(good)}
                className={ClassNames({
                  hidden: good === selectedGood,
                })}
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
