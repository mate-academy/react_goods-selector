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

    if (selectedGoods.includes(item)) {
      this.setState(prevState => (
        { selectedGoods: prevState.selectedGoods.filter(e => e !== item) }));
    } else {
      this.setState(() => (
        { selectedGoods: [...selectedGoods, item] }));
    }
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
          {selectedGoods.length
            ? (
              <button
                className="clear-button"
                type="button"
                onClick={this.buttonClear}
              >
                clear
              </button>
            )
            : ''}
        </div>
        <ul>
          {goodsFromServer.map((good) => (
            <div
              className={selectedGoods.includes(good)
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
                { selectedGoods.includes(good) ? 'Remove' : 'Select' }
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
