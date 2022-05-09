import React from 'react';
import './App.scss';

const goodsFromServer = [
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
  allGoods: string[],
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    allGoods: goodsFromServer,
    selectedGoods: ['Jam'],
  };

  buttonClick = (item: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(item)) {
      this.setState({ selectedGoods: selectedGoods.filter(e => e !== item) });
    } else {
      this.setState({ selectedGoods: [...selectedGoods, item] });
    }
  };

  buttonClear = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { allGoods, selectedGoods } = this.state;
    let titleDesc = '';
    const lastIndex = selectedGoods.length - 1;

    switch (selectedGoods.length) {
      case 0: titleDesc = 'No goods selected';
        break;
      case 1: titleDesc = `${selectedGoods} is selected`;
        break;
      case 2: titleDesc = `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
        break;
      default: titleDesc = `${selectedGoods.slice(0, lastIndex).join(', ')} and ${selectedGoods[lastIndex]} are selected`;
    }

    return (
      <div className="App">
        <h1>{ titleDesc }</h1>
        <div className="clear-button-wrapper">
          {lastIndex + 1
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
          {allGoods.map((good) => (
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
