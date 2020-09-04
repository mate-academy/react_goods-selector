import React from 'react';
import './App.scss';
import cn from 'classnames';

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
  };

  selectedGood = (event) => {
    this.setState({
      selectedGood: event.target.innerText,
    });
  }

  resetSelection = () => {
    this.setState({
      selectedGood: '-',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <div className="heading">
          <h1 className="heading__title">
            Selected good:
          </h1>

          <span className="heading__good">
            {selectedGood}
          </span>

          {selectedGood !== '-'
            ? (
              <button
                type="button"
                className="heading__button button button--reset"
                onClick={() => this.resetSelection()}
              />
            )
            : null
          }
        </div>

        <ul className="goods">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="goods__item"
            >
              <button
                type="button"
                className={cn('goods__button', 'button', {
                  'button--good-selected': selectedGood === good,
                })}
                onClick={() => this.setState({ selectedGood: good })}
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
