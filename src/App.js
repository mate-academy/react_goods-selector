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
    selectedGoods: [],
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
          {this.state.selectedGoods.length !== 0
            ? (
              <h1>
                {`Selected goods:
                  ${this.state.selectedGoods.join(', ')}
                  are selected`}
              </h1>
            )
            : <h1>Selected goods: No goods selected</h1>}
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
              <li className="list-group-item" key={good}>
                {good}
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    this.addGoods(good);
                  }}
                >
                  Select
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.removeGood(good);
                  }}
                >
                  Remove
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
