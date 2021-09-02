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

interface State {
  goods: string[];
  addedToCart: string[];
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    addedToCart: [],
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      addedToCart: [
        ...state.addedToCart,
        good,
      ],
    }));
  };

  removeGood = (good: string) => {
    this.setState((state) => ({
      addedToCart: state.addedToCart.filter(itemGood => itemGood !== good),
    }));
  };

  reset = () => {
    this.setState({
      addedToCart: [],
    });
  };

  render() {
    const { goods, addedToCart } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="h1. Bootstrap heading">Selected good: </h1>
          {addedToCart.length === 1 && `${addedToCart[0]} is selected`}
          {addedToCart.length > 1 && (
            <>
              {addedToCart.map((item: string) => (
                <div key={item} className="item">{item}</div>))}
              are selected
            </>
          )}
          {!addedToCart.length && 'No goods selected'}
        </div>
        <button
          type="submit"
          onClick={() => {
            this.reset();
          }}
          className="btn btn-warning"
        >
          Reset
        </button>
        <div className="Goods">
          {goods.length && (
            goods.map((good: string) => (
              <div className="GoodItem">
                <h3 key={good} className={!addedToCart.includes(good) ? ('text-primary') : ('text-light bg-dark')}>{good}</h3>
                {!addedToCart.includes(good) && (
                  <button
                    type="submit"
                    onClick={() => {
                      this.addGood(good);
                    }}
                    className="btn btn-primary"
                  >
                    Add
                  </button>
                )}
                {addedToCart.includes(good) && (
                  <button
                    type="submit"
                    onClick={() => {
                      this.removeGood(good);
                    }}
                    className="btn btn-danger"
                  >
                    X
                  </button>
                )}
              </div>
            )))}
        </div>
      </div>
    );
  }
}

export default App;
