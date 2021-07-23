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
    selectedGood: ['Jam'],
  }

  addGood = (good) => {
    this.setState(prev => ({
      selectedGood: [...prev.selectedGood, good],
    }));
  }

  removeGood = (good) => {
    this.setState(prev => ({
      selectedGood: [...prev.selectedGood].filter(item => item !== good),
    }));
  }

  getClearList = () => {
    this.setState({
      selectedGood: [],
    });
  }

  makeList = () => {
    const { selectedGood } = this.state;
    const part = selectedGood.slice(0, -1).join(', ');

    switch (selectedGood.length) {
      case 0:
        return '';

      case 1:
        return `${selectedGood.join(', ')} is selected`;

      case 2:
        return `${selectedGood[0]} and
          ${selectedGood[1]} are selected`;

      default:
        return `${part} and
          ${selectedGood[selectedGood.length - 1]} are selected`;
    }
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <div className="list-title">
          <div className="list-title__block">
            <h1 className="list-title__title">
              {this.makeList().length > 0
                ? ('Selected good:')
                : ('No goods selected')
              }
            </h1>
            <p className="list-title__content">{this.makeList()}</p>
          </div>
          {
            (this.makeList().length > 0)
              ? (
                <button
                  className="btn list-title__btn"
                  type="button"
                  onClick={() => {
                    this.getClearList();
                  }}
                >
                  Clear
                </button>
              )
              : null
          }
        </div>
        <ul className="todo-list">
          {goodsFromServer.map(good => (
            <li
              key={Math.random()}
              className={classNames(`todo`, {
                active: selectedGood.includes(good),
              })}
            >
              <span className="todo__content">{good}</span>
              {!selectedGood.includes(good)
                ? (
                  <button
                    className="btn btn-add"
                    type="button"
                    onClick={() => {
                      this.addGood(good);
                    }}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    className="btn btn-remove"
                    type="button"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                  >
                    Remove
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
