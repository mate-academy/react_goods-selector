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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  setSelectedGoods = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState(((prevState: State) => {
      if (selectedGoods.includes(good)) {
        return {
          selectedGoods: prevState.selectedGoods
            .filter(prevGood => prevGood !== good),
        };
      }

      return { selectedGoods: [...prevState.selectedGoods, good] };
    }));
  };

  clearSelectedGood = (good: string) => {
    this.setState((prevState => ({
        selectedGoods: [...prevState.selectedGoods].filter(e => e !== good),
      }
    )));
  };

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  createTitle = (goodsArr: string[]) => {
    const { length } = goodsArr;

    switch (length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${goodsArr[0]} is selected`;
      case 2:
        return `${goodsArr.join(' and ')} are selected`;
      default:
        return `${goodsArr.slice(0, -1).join(', ')} and ${goodsArr[length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__title">
            {this.createTitle(selectedGoods)}
          </h1>
          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="App__button"
              onClick={this.clearSelectedGoods}
            >
              Clear
            </button>
          )}
        </div>

        <ul className="App__goods-list">
          {goodsFromServer.map(good => {
            const isSelected = selectedGoods.includes(good);
            const buttonText = isSelected ? 'Remove' : 'Select';

            return (
              <li
                key={good}
                className="App__goods-list-item"
              >
                <span>{good}</span>
                <button
                  type="button"
                  className="App__button"
                  onClick={() => {
                    return isSelected
                      ? this.clearSelectedGood(good)
                      : this.setSelectedGoods(good);
                  }}
                >
                  {buttonText}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
