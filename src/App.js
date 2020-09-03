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

  selectGood = (good) => {
    this.setState({
      selectedGood: good,
    });
  }

  clearSelected = () => {
    this.setState({
      selectedGood: '',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="container">
        <div className="App">
          <h1>
            Selected good:
            {this.state.selectedGood}
          </h1>
          {goodsFromServer.map(good => (
            <ul>
              <li>
                <button
                  type="button"
                  className={classNames('App__button', {
                    'App__button--active': good === selectedGood,
                  })}
                  key={good}
                  onClick={() => this.selectGood(good)}
                >
                  {good}
                </button>
              </li>
            </ul>

          ))}

          <button
            type="button"
            onClick={this.clearSelected}
            className="App__button App__button--clear"
          >
            Сlear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
