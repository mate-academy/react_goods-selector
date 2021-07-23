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

  getProduct = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeProduct = (good) => {
    this.setState(prevState => ({
      selectedGoods:
        prevState.selectedGoods.filter(product => product !== good),
    }));
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
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                selectedGoods.includes(good)
                  ? 'selected'
                  : 'not-selected'
              }
            >
              <span>{`${good} `}</span>
              {
                selectedGoods.indexOf(good) < 0
                  ? (
                    <button
                      type="button"
                      onClick={
                        () => (
                          this.getProduct(good)
                        )}
                    >
                      Select
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={
                        () => (
                          this.removeProduct(good)
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
