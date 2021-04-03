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
    selectedGoods: ['Jam'],
  }

  addGoods = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  }

  removeGood = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods
        .filter(product => product !== good),
    }));
  }

  removeGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    return (
      <div>
        <div className="App">
          {this.state.selectedGoods.length === 1
            ? (
              <h1>
                {`${this.state.selectedGoods.join(', ')}
                is selected`}
              </h1>
            )
            : this.state.selectedGoods.length > 1
              ? (
                <h1>
                  {`${this.state.selectedGoods.slice(0, -1).join(', ')}
                and
                ${this.state.selectedGoods[this.state.selectedGoods.length - 1]}
                are selected`}
                </h1>
              )
              : (<h1>No goods selected</h1>)
          }

          {this.state.selectedGoods.length !== 0
          && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.removeGoods();
            }}
          >
            Remove All
          </button>
          )}
        </div>
        <div className="container shadow p-3 mb-5 bg-body rounded">
          <ul className="list-group list-group-flush">
            {goodsFromServer.map(good => (
              <li
                className={classNames(`list-group-item`,
                  { highlight: this.state.selectedGoods.includes(good) })}
                key={good}
              >
                {good}
                {this.state.selectedGoods.includes(good)
                  ? (
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => {
                        this.removeGood(good);
                      }}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => {
                        this.addGoods(good);
                      }}
                    >
                      Add
                    </button>
                  )
              }
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
