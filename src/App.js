import React from 'react';
import classNames from 'classnames';
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
    selectedGood: ' - ',
  }

  clickHandler = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  removeHandler = () => {
    this.setState({
      selectedGood: ' - ',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h2>
          <span>
            Selected good:
            {' '}
            {selectedGood}
          </span>
          <button
            type="button"
            onClick={this.removeHandler}
            className="remove-button"
          >
            &#10005;
          </button>
        </h2>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <button
                type="button"
                onClick={() => this.clickHandler(good)}
                className={classNames('good-item',
                  { selected: selectedGood === good })}
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
