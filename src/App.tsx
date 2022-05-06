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

class App extends React.Component {
  state = {
    selectedGoods: 'Jam',
  };

  selectGood = (good: string) => () => {
    this.setState({
      selectedGoods: good,
    });
  };

  clearSelected = () => {
    this.setState({
      selectedGoods: '',
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          <h1>
            {selectedGoods ? `${selectedGoods} is selected` : 'No Goods selected'}
          </h1>
          {selectedGoods
            && (
              <button
                type="button"
                className="clearButton"
                onClick={
                  this.clearSelected
                }
              >
                Clear
              </button>
            )}
        </div>

        <ul>
          {goodsFromServer.map(good => {
            const isSelected = this.state.selectedGoods === good;

            return (
              <li
                key={good}
                className="item"
              >
                {good}
                {!isSelected
                  && (
                    <button
                      type="button"
                      className="button"
                      onClick={
                        this.selectGood(good)
                      }
                    >
                      Select
                    </button>
                  )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
