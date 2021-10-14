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

class App extends React.Component<{}, { selectedGoods: string[] }> {
  state = {
    selectedGoods: ['Jam'],
  };

  addOrRemoveGood = (good: string) => {
    this.setState(((prevState: { selectedGoods: string[] }): { selectedGoods: string[] } => ({
      selectedGoods:
        (prevState.selectedGoods.includes(good))
          ? prevState.selectedGoods.filter(goodToLeave => goodToLeave !== good)
          : [...prevState.selectedGoods, good],
    })));
  };

  whatIsSelected = () => {
    const { selectedGoods } = this.state;
    let result = '';

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    selectedGoods.forEach((selectedGood, i) => {
      if (i !== selectedGoods.length - 1) {
        result += `${selectedGood}, `;
      }
    });

    return `${result.slice(0, -2)} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__heading">
          <h1 className="App__heading-text">
            {this.whatIsSelected()}
          </h1>
          <button
            className="App__button"
            type="button"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            X
          </button>
        </div>
        <ul className="App__list">
          {goodsFromServer.map(
            good => (
              <>
                <li
                  className={
                    selectedGoods.includes(good)
                      ? 'App__list-item--selected'
                      : 'App__list-item'
                  }
                  key="good"
                >
                  {good}
                  <button
                    className="App__button"
                    type="button"
                    onClick={() => {
                      this.addOrRemoveGood(good);
                    }}
                  >
                    {selectedGoods.includes(good) ? '-' : '+'}
                  </button>
                </li>
              </>
            ),
          )}
        </ul>
      </div>
    );
  }
}

export default App;
