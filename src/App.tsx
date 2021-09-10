import './App.scss';
import React from 'react';

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
  selectedGood:string;
};

class App extends React.Component {
  state: State = {
    selectedGood: 'Jam',
  };

  selectGood = (goodTitle:string) => {
    this.setState(() => (
      { selectedGood: goodTitle }
    ));
  };

  clearCurrent = () => {
    this.setState(() => (
      { selectedGood: null }
    ));
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {
            this.state.selectedGood ? `${this.state.selectedGood} is selected` : 'No goods selected'
          }
          {
            this.state.selectedGood !== null
            && (
              <button onClick={this.clearCurrent} type="button">Clear current</button>
            )
          }
        </h1>
        <ul className="GoodsList">
          {goodsFromServer.map(good => (
            <li className="GoodsList__item">
              {good}
              {good !== this.state.selectedGood
              && (
                <button
                  type="button"
                  onClick={() => {
                    this.selectGood(good);
                  }}
                  className="GoodsList__selectButton"
                >
                  Select
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
