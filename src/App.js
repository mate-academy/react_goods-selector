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
    selectedGood: [],
  }

  resetSelectedGoods = () => this.setState({ selectedGood: [] });

  addGoods = (good) => {
    this.setState(prevState => ({
      selectedGood: [...prevState.selectedGood, good],
    }));
  }

  removeGoods = (good) => {
    this.setState(prevState => ({
      selectedGood: prevState.selectedGood.filter(
        item => item !== good,
      ),
    }));
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App d-flex flex-column align-items-center">
        <h1>
          {selectedGood.length
            ? `Selected: ${selectedGood.join(', ')}`
            : 'No goods selected'}
        </h1>
        <button
          type="button"
          className="btn btn-outline-secondary mb-2"
          onClick={this.resetSelectedGoods}
          disabled={selectedGood.length === 0}
        >
          Reset
        </button>
        <ul className="list-group w-25">
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={classNames(
                  'list-group-item',
                  'd-flex',
                  'justify-content-between',
                  'align-items-center',
                  { 'bg-light': selectedGood.includes(good) },
                )}
              >
                {good}
                <button
                  type="button"
                  className="btn btn-outline-secondary w-50 text-center"
                  onClick={() => (
                    selectedGood.includes(good)
                      ? this.removeGoods(good)
                      : this.addGoods(good)
                  )}
                >
                  {selectedGood.includes(good)
                    ? <span className="text-danger">Unselect</span>
                    : 'Select'}
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
