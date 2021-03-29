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

const nonSelected = 'None';

class App extends React.Component {
  state = {
    selectedItem: 'Jam',
  }

  resetSelection = () => {
    this.setState({ selectedItem: nonSelected });
  }

  selectGoods = (item) => {
    this.setState({ selectedItem: item });
  }

  highlight(item) {
    return item === this.state.selectedItem
      ? 'goods__item'
      : '';
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h1>
            Selected good:
            {' '}
            {this.state.selectedItem}
          </h1>
          {this.state.selectedItem !== nonSelected && (
            <button
              type="button"
              className="heading__button"
              onClick={this.resetSelection}
            >
              X
            </button>
          )}
        </div>

        {goodsFromServer.map(good => (
          <div key={good} className="goods">
            <div className={this.highlight(good)}>
              {good}
            </div>

            <div className="goods__button">
              <button
                type="button"
                onClick={() => {
                  this.selectGoods(good);
                }}
              >
                V
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
