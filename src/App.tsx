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
  selectedGood:string[];
};

class App extends React.Component {
  state: State = {
    selectedGood: ['Jam'],
  };

  selectGood = (goodTitle:string) => {
    this.setState((state:State) => ({
      selectedGood: [...state.selectedGood, goodTitle],
    }
    ));
  };

  unSelectGood = (goodTitle:string) => {
    const indexToRemoveInTitle = this.state.selectedGood.indexOf(goodTitle);

    this.setState((state:State) => {
      const newTitleItems = [...state.selectedGood];

      newTitleItems.splice(indexToRemoveInTitle, 1);

      return {
        selectedGood: newTitleItems,
      };
    });
  };

  clearCurrent = () => {
    this.setState(() => (
      { selectedGood: [] }
    ));
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {
            this.state.selectedGood.length > 0 ? `${this.state.selectedGood.join(', ')} is selected` : 'No goods selected'
          }
          {
            this.state.selectedGood.length > 0
            && (
              <button onClick={this.clearCurrent} className="GoodsList__resetButton" type="button">Clear chosen</button>
            )
          }
        </h1>
        <ul className="GoodsList">
          {goodsFromServer.map(good => (
            <li className="GoodsList__item">
              {good}
              {!this.state.selectedGood.includes(good)
                ? (
                  <button
                    type="button"
                    onClick={() => {
                      this.selectGood(good);
                    }}
                    className="GoodsList__selectButton"
                  >
                    Select
                  </button>
                )
                : (
                  <button
                    type="button"
                    onClick={() => {
                      this.unSelectGood(good);
                    }}
                    className="GoodsList__unSelectButton"
                  >
                    Remove
                  </button>
                ) }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
