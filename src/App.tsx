import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

export class App extends React.Component {
  state = {
    selectedGood: ['Jam'],
  };

  clearGoods = () => {
    this.setState({ selectedGood: ['No goods selected'] });
  };

  selectGoods = (good: string) => {
    const { selectedGood } = this.state;

    this.setState(
      selectedGood[0] !== 'No goods selected'
        ? { selectedGood: [...selectedGood, good] }
        : { selectedGood: [good] },
    );
  };

  removeGoods = (good: string) => {
    const { selectedGood } = this.state;

    this.setState(
      selectedGood.length > 1
        ? { selectedGood: [...selectedGood.filter(good1 => good1 !== good)] }
        : { selectedGood: ['No goods selected'] },
    );
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {selectedGood[0] !== 'No goods selected'
          ? (
            <h1
              className="title"
            >
              {selectedGood.join(', ')}
              {' '}
              {selectedGood.length === 1
                ? 'is selected'
                : 'are selected'}
              <button
                className="title__button"
                type="button"
                onClick={this.clearGoods}
              >
                Clear
              </button>
            </h1>
          )
          : (
            <h1 className="title">
              No goods selected
            </h1>
          )}

        <ul className="goodList">
          {goodsFromServer.map(good => (
            <div className="goodList__container" key={good}>
              <li className="goodList__good">
                {good}
              </li>

              {!selectedGood.includes(good)
                ? (
                  <button
                    className="goodList__button"
                    type="button"
                    onClick={() => {
                      this.selectGoods(good);
                    }}
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    className="goodList__button goodList__button-remove"
                    type="button"
                    onClick={() => {
                      this.removeGoods(good);
                    }}
                  >
                    Remove
                  </button>
                )}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
