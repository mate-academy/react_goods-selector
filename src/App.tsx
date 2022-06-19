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

  setSelectedGoods = (goods: string) => {
    this.setState(((prevState: State) => (
      { selectedGoods: [...prevState.selectedGoods, goods] }
    )));
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
      <div className="select">
        <div>
          <h1 className="select__content">
            {this.createTitle(selectedGoods)}
          </h1>

          <button
            type="button"
            className="select__clearBtn"
            onClick={this.clearSelectedGoods}
          >
            clear
          </button>
        </div>

        <ul className="select__items">
          {goodsFromServer.map(good => {
            const isSelected = selectedGoods.includes(good);
            const buttonText = isSelected
              ? 'Remove'
              : 'Select';
            const handleClick = () => (
              this.state.selectedGoods.includes(good)
                ? this.removeSelectedGood(good)
                : this.setSelectedGoods(good)
            );

            return (
              <li
                key={good}
                className="select__item"
              >
                <span>{good}</span>
                <button
                  type="button"
                  className="select__btn"
                  onClick={handleClick}
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
