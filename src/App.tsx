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

type Props = {

};

type State = {
  selectedGoods: string[],
};

class App extends React.Component<Props, State> {
  state: State = {
    selectedGoods: [],
  };

  clickOnGood = (event: React.MouseEvent, currGood: string) => {
    event.preventDefault();
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(currGood)) {
      this.removeButtonClick(currGood);
    } else {
      this.addButtonClick(currGood);
    }
  };

  addButtonClick = (goodToAdd: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, goodToAdd],
    }));
  };

  removeButtonClick = (goodToRemove: string) => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods.filter(good => good !== goodToRemove)],
    }));
  };

  resetButtonClick = () => {
    this.setState(() => ({
      selectedGoods: [],
    }));
  };

  getSelectedGoods = (selectedGoods: string[]) => {
    switch (selectedGoods.length) {
      case 0: {
        return 'No goods selected';
      }

      case 1: {
        return `${selectedGoods[0]} is selected`;
      }

      default: {
        return selectedGoods.join(', ').replace(/, (?=[^,]+$)/, ' and ').concat(' is selected');
      }
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="result-container">
          <h1>
            {this.getSelectedGoods(selectedGoods)}
          </h1>
          { selectedGoods.length > 0 && (
            <button
              type="button"
              className="reset-button"
              onClick={this.resetButtonClick}
            >
              X
            </button>
          )}
        </div>
        <ul className="goods-list">
          {goodsFromServer.map(good => (
            <li key={good} className="goods-list__item">
              <a
                href="/"
                className={selectedGoods.includes(good)
                  ? 'active goods-list__link'
                  : 'goods-list__link'}
                onClick={(event) => {
                  this.clickOnGood(event, good);
                }}
              >
                {good}
              </a>
              <button
                type="button"
                onClick={() => {
                  if (!selectedGoods.includes(good)) {
                    this.addButtonClick(good);
                  } else {
                    this.removeButtonClick(good);
                  }
                }}
              >
                {!selectedGoods.includes(good)
                  ? 'Add'
                  : 'Remove'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
