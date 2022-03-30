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

  selectedGood = (good: string) => () => {
    this.setState({
      selectedGoods: good,
    });
  };

  clearSelction = () => {
    this.setState({
      selectedGoods: '',
    });
  };

  render() {
    const { selectedGoods } = this.state;
    const headerText = selectedGoods
      ? `${selectedGoods} is selected`
      : 'No goods selected';

    return (
      <div className="App">
        <h1>{headerText}</h1>
        {selectedGoods
        && <button type="button" onClick={this.clearSelction}>X</button>}
        <ul>
          {goodsFromServer.map((good) => {
            const isGoodSelected = selectedGoods === good;

            return (
              <li key={good}>
                {good}
                {!isGoodSelected
                && (
                  <button
                    type="button"
                    className="button"
                    onClick={this.selectedGood(good)}
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
