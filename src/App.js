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

  remoteItem = (item) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods].filter(el => el !== item),
    }));
  }

  remoteAll = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  createTitle = (listLength) => {
    if (listLength === 0) {
      return 'No goods selected';
    }

    if (listLength === 1) {
      return `${this.state.selectedGoods[0]} is selected`;
    }

    return `${this.state.selectedGoods.join(', ')} are selected`;
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

            {selectedGoods.length
              ? (
                <button
                  type="button"
                  className="btn btn-warning clearbtn "
                  onClick={() => this.remoteAll()}
                >
                  X
                </button>
              )
              : ''
          }
          </div>

          {goodsFromServer.map(item => (
            <div key={item} className="list-group mb-1 fs-4">
              <div
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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
