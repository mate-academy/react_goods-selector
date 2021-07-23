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

class App extends React.PureComponent {
  state = {
    selectedGoods: [],
  };

  getProduct = (event, good) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: [...selectedGoods, good],
    });
  };

  removeProduct = (event, good) => {
    const { selectedGoods } = this.state;

    selectedGoods.splice(selectedGoods.indexOf(good), 1);
    this.forceUpdate();
  };

  clearList = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        {
          selectedGoods.length
            ? (
              <>
                <button type="button" onClick={this.clearList}>
                  Clear list
                </button>
                <h1>
                  Selected goods:
                  {selectedGoods.map(good => (
                    <span>
                      {
                    good === selectedGoods[0]
                      ? ` ${good}`
                      : `, ${good}`
                  }
                    </span>
                  ))}
                </h1>
              </>
            )
            : <h1>No goods selected</h1>
        }
        <ul className="list">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={
                selectedGoods.indexOf(item) >= 0
                  ? 'selected'
                  : 'not-selected'
              }
            >
              <span>{`${item} `}</span>
              {
                selectedGoods.indexOf(item) < 0
                  ? (
                    <button
                      type="button"
                      onClick={
                        event => (
                          this.getProduct(event, item)
                        )}
                    >
                      Select
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={
                        event => (
                          this.removeProduct(event, item)
                        )}
                    >
                      X
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
