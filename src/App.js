import React from 'react';
import ClassNames from 'classnames';
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
    selectedGood: null,
  };

  componentDidMount() {
    this.setState({
      selectedGood: 'Jam',
    });
  }

  selectGood = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  clearSelection = () => {
    this.setState({
      selectedGood: null,
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <h1>
            {
              selectedGood
                ? `Selected good: ${selectedGood}`
                : 'No goods selected'
            }
          </h1>
          {
            selectedGood
            && (
            <button
              type="button"
              className="btn btn-clear-selection"
              onClick={this.clearSelection}
            >
              X
            </button>
            )
          }
        </header>
        <ul className="goods-list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={ClassNames(
                'goods-list__item',
                selectedGood === good && 'goods-list__item--selected',
              )}
            >
              {good}
              {
                good === selectedGood
                || (
                <button
                  type="button"
                  className="btn goods-list__button"
                  onClick={this.selectGood.bind(this, good)}
                >
                  Select
                </button>
                )
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
