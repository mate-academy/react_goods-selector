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
    selectedItem: nonSelected,
  }

  highlight(item) {
    return item === this.state.selectedItem
      ? 'goods__item active'
      : 'goods__item';
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
              onClick={() => {
                this.setState({ selectedItem: nonSelected });
              }}
            >
              X
            </button>
          )}
        </div>

        {goodsFromServer.map(item => (
          <div key={item} className="goods">
            <div className={this.highlight(item)}>
              {item}
            </div>

            <div className="goods__button">
              <button
                type="button"
                onClick={() => {
                  this.setState({ selectedItem: item });
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
