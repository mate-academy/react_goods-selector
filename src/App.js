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
    goods: [...goodsFromServer],
    selectedGood: 'Jam',
  }

  clearTitle = () => {
    this.setState({
      selectedGood: null,
    });
  }

  render() {
    return (
      <div className="app">
        <h1>
          {this.state.selectedGood
            ? `${this.state.selectedGood} is selected`
            : 'No goods selected'
          }

          { this.state.selectedGood && (
            <button
              type="button"
              onClick={this.clearTitle}
            >
              X
            </button>
          )
          }
        </h1>

        <div>
          <ul>
            {this.state.goods.map(good => (
              <li
                className={this.state.selectedGood === good
                  ? 'listItem--active'
                  : 'listItem'}
                key={good}
              >
                {good}
                <button
                  type="button"
                  className={this.state.selectedGood === good
                    ? 'active'
                    : ''}
                  onClick={() => {
                    this.setState({
                      selectedGood: good,
                    });
                  }}
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
