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
    this.setState(((prevState: State) => {
      return { selectedGoods: [...prevState.selectedGoods, good] };
    }));
  };

  removeSelectedGood = (good: string) => {
    this.setState((prevState => ({
      selectedGoods: prevState.selectedGoods.filter(remaining => (
        remaining !== good)),
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
      <div className="App
        box
        has-background-dark
        px-6
        py-6"
      >
        <div className="is-flex is-justify-content-space-between">
          <h1 className="title
            is-2
            has-text-white
            has-text-weight-bold"
          >
            {this.createTitle(selectedGoods)}
          </h1>
          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="button is-danger is-medium"
              onClick={this.clearSelectedGoods}
            >
              Clear
            </button>
          )}
        </div>

        <ul className="mt-5">
          {goodsFromServer.map(good => {
            const isSelected = selectedGoods.includes(good);
            const buttonText = isSelected ? 'Remove' : 'Select';

            return (
              <li
                key={good}
                className="is-flex
                  is-justify-content-space-between
                  has-text-white
                  my-4
                  is-size-3"
              >
                <span>{good}</span>
                <button
                  type="button"
                  className="button is-info is-medium"
                  onClick={() => {
                    return isSelected
                      ? this.removeSelectedGood(good)
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
