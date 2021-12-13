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

type State = {
  selectedGoods: string[],
};

class App extends React.Component< {}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGood = (addedGood: string) => {
    this.setState((prevState) => (
      {
        selectedGoods: [...prevState.selectedGoods, addedGood],
      }
    ));
  };

  removeGood = (removedGood: string) => {
    this.setState((prevState) => (
      {
        selectedGoods: prevState.selectedGoods.filter((good) => good !== removedGood),
      }
    ));
  };

  clearAllGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {'Selected good: '}
          <span>
            {this.state.selectedGoods.join(', ')}
          </span>
        </h1>
        {this.state.selectedGoods.length > 0 && (
          <div className="wrap">
            <button
              type="button"
              className="button__item button__item--clearAll"
              onClick={this.clearAllGoods}
            >
              X
            </button>
          </div>
        )}
        <ul className="goodsList">
          {
            goodsFromServer.map((good) => {
              const isSelected = this.state.selectedGoods.includes(good);

              return (
                <li className="goodsList__item" key={good}>
                  <h3 className="name">
                    {good}
                  </h3>
                  {
                    isSelected
                      ? (
                        <button
                          type="button"
                          className="button__item selected"
                          onClick={() => {
                            this.removeGood(good);
                          }}
                        >
                          Remove item
                        </button>
                      )
                      : (
                        <button
                          type="button"
                          className="button__item selected--not"
                          onClick={() => {
                            this.addGood(good);
                          }}
                        >
                          Add item
                        </button>
                      )
                  }
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
