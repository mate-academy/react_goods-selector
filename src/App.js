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
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={
                selectedGoods.includes(item)
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
                        () => (
                          this.getProduct(item)
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
                          this.removeProduct(item)
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
