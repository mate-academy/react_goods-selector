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

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  buttonClick = (item: string) => {
    const { selectedGoods } = this.state;

    this.setState(prevState => {
      if (selectedGoods.includes(item)) {
        return {
          selectedGoods: prevState.selectedGoods.filter(e => e !== item),
        };
      }

      return { selectedGoods: [...selectedGoods, item] };
    });
  };

  buttonClear = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  titleText = (selectedArr: string[]) => {
    switch (selectedArr.length) {
      case 0: return 'No goods selected';
        break;
      case 1: return `${selectedArr} is selected`;
        break;
      default: return `${selectedArr.slice(0, -1).join(', ')} and ${selectedArr[selectedArr.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>{ this.titleText(selectedGoods) }</h1>
        <div className="clear-button-wrapper">
          {Boolean(selectedGoods.length)
            && (
              <button
                className="clear-button"
                type="button"
                onClick={this.buttonClear}
              >
                clear
              </button>
            )}
        </div>
        <ul>
          {goodsFromServer.map((good) => {
            const isInSelGoods = selectedGoods.includes(good);

            return (
              <div
                className={isInSelGoods
                  ? 'item  selected'
                  : 'item'}
                key={good}
              >
                <li className="item__good">{good}</li>
                <button
                  className="item__button"
                  type="button"
                  onClick={() => {
                    this.buttonClick(good);
                  }}
                >
                  { isInSelGoods ? 'Remove' : 'Select' }
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
