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

interface State {
  selectedGoods: string[]
}
class App extends React.Component {
  state: State = {
    selectedGoods: ['Jam'],
  };

  selectGood = (newGood:string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(newGood)) {
      selectedGoods.splice(selectedGoods.indexOf(newGood), 1);
    } else {
      selectedGoods.push(newGood);
    }

    this.setState({});
  };

  clearList = () => {
    this.state.selectedGoods = [];
    this.setState({});
  };

  headerOut(numberOfGoods:number) {
    const { selectedGoods } = this.state;

    switch (numberOfGoods) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return selectedGoods.reduce((resultStr, good, index, goodsList) => {
          if (index < (goodsList.length - 2)) {
            return (`${resultStr}${good}, `);
          }

          if (index === goodsList.length - 1) {
            return `${resultStr}${goodsList[index - 1]} and ${goodsList[index]} are selected`;
          }

          return resultStr;
        }, '');
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="header">
          {this.headerOut(selectedGoods.length)}
          <button type="button" className="header__button clearlist" onClick={this.clearList}>X</button>
        </h1>
        {goodsFromServer.map((good) => (
          <div className="good">
            <div className={`good__item ${selectedGoods.includes(good) ? 'selected' : ''}`}>{good}</div>
            <button type="button" className="good__button" onClick={() => this.selectGood(good)}>
              {selectedGoods.includes(good) ? 'Remove' : 'Add'}
              {' '}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
