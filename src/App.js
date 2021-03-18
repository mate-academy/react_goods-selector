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
    selectedGood: ['Jam'],
  }

  addGoods = (good) => {
    if (this.state.selectedGood.includes('No goods selected')) {
      this.setState({ selectedGood: [] });
    }

    this.setState((state) => {
      const updatedGoods = [...state.selectedGood];

      updatedGoods.push(good.name);

      return {
        selectedGood: updatedGoods,
      };
    });
  };

  removeGoods = (good) => {
    if (this.state.selectedGood.length === 1) {
      this.setState({ selectedGood: ['No goods selected'] });
    }

    this.setState(state => ({
      selectedGood: state.selectedGood.filter(item => item !== good.name),
    }));
  };

  removeAllGoods = () => {
    this.setState({ selectedGood: ['No goods selected'] });
  }

  render() {
    return (
      <div className="App">
        <h1>
          <button
            type="button"
            onClick={this.removeAllGoods}
            className={classNames({
              hiddenButton:
                this.state.selectedGood.includes('No goods selected'),
            })}
          >
            X
          </button>
          {` Selected good: ${this.state.selectedGood.map(
            good => (` ${good}`),
          )}`}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good.id}
              className="list"
            >
              <span
                className={classNames({
                  selectedGood: this.state.selectedGood.includes(good.name),
                })}
              >
                {good.name}
              </span>
              {' '}
              <button
                type="button"
                className={classNames({
                  hiddenButton: this.state.selectedGood.includes(good.name),
                })}
                onClick={() => {
                  this.addGoods(good);
                }}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  this.removeGoods(good);
                }}
                className={classNames({
                  hiddenButton: !this.state.selectedGood.includes(good.name),
                })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
