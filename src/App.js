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
    selectedGood: '-',
  }

  selectingClickHandler = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  removingClickHandler = () => {
    this.setState({
      selectedGood: '-',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="heading">
          <h1 className="heading__title">
            {`Selected good: ${selectedGood}`}
          </h1>
          <button
            type="button"
            className="heading__button"
            onClick={() => (
              this.removingClickHandler()
            )}
          >
            X
          </button>
        </div>

        <ul className="goods">
          {goodsFromServer.map(good => (
            <li key={good}>
              <button
                type="button"
                className={
                  classNames('goods__button', {
                    goods__button__active: selectedGood === good,
                  })
                }
                onClick={() => (
                  this.selectingClickHandler(good)
                )}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
