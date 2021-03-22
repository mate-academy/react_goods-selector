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
].map((name, index) => ({
  name,
  id: index + 1,
}));

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  addGoods = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good.name],
    }));
  };

  removeGoods = (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== good.name),
    }));
  };

  removeAllGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGoods.length > 0
            ? (
              <button
                type="button"
                onClick={this.removeAllGoods}
              >
                X
              </button>
            )
            : ''
          }
          {` Selected good: ${
            selectedGoods.length > 0
              ? selectedGoods.map(good => (` ${good}`))
              : 'No goods selected'}`
          }
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good.id}
              className="list"
            >
              <span
                className={classNames({
                  selectedGoods: selectedGoods.includes(good.name),
                })}
              >
                {good.name}
              </span>
              {' '}
              {!selectedGoods.includes(good.name) && (
                <button
                  type="button"
                  onClick={() => {
                    this.addGoods(good);
                  }}
                >
                  Add
                </button>
              )}
              {selectedGoods.includes(good.name) && (
                <button
                  type="button"
                  onClick={() => {
                    this.removeGoods(good);
                  }}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
