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
    selectedGoods: [],
  }

  addItem = (item) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, item],
    }));
  }

  removeItem = (item) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods].filter(el => el !== item),
    }));
  }

  removeAll = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  createTitle = (listLength) => {
    switch (listLength) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${this.state.selectedGoods[0]} is selected`;
      default:
        return `${this.state.selectedGoods.join(', ')} are selected`;
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App d-flex flex-column align-items-center">
        <div className="App card-body w-75 p-3">
          <div className="d-flex justify-content-center card-title">
            <h1 className="px-5">
              {this.createTitle(selectedGoods.length)}
            </h1>

            {selectedGoods.length && (
            <button
              type="button"
              className="btn btn-warning clearbtn "
              onClick={this.remoteAll}
            >
              X
            </button>
            )}
          </div>

          <ul className="list-group fs-4">
            {goodsFromServer.map(item => (
              <li
                key={item}
                className={
                  classNames('list-group-item d-flex justify-content-between',
                    { selected: selectedGoods.includes(item) })}
              >
                {item}

                {selectedGoods.includes(item)
                  ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.remoteItem(item)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => this.addItem(item)}
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
