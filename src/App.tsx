import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Sex',
  'Drugs',
  'Rock-n-Roll',
  'Love',
  'Passion',
  'Alcohol',
  'Party',
  'Adventure',
  'Laugh',
  'Money',
];

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [],
  };

  toggleSelectedGoods = (good: string) => {
    if (good) {
      this.setState((state) => {
        return !this.alreadyInSelectedGoods(good)
          ? { selectedGoods: [...state.selectedGoods, good] }
          : { selectedGoods: state.selectedGoods.filter(item => item !== good) };
      });
    }
  };

  alreadyInSelectedGoods = (good: string) => {
    return this.state.selectedGoods.find(item => item === good);
  };

  selectedGoodsInfoForUser = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'Choose Things To Enjoy';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App__container">
          <div className="App__top-section">
            <h1 className="App__goods-info">
              {this.selectedGoodsInfoForUser()}
            </h1>
            <button
              type="button"
              className="App__close-button"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              XXX
            </button>
          </div>
          <ul className="App__list">
            {goodsFromServer.map((good) => {
              return (
                <li key={good} className={this.alreadyInSelectedGoods(good) ? 'list list-selected' : 'list'}>
                  {good}
                  <button
                    type="button"
                    className="App__button-list"
                    onClick={() => this.toggleSelectedGoods(good)}
                  >
                    {!this.alreadyInSelectedGoods(good) ? 'Add' : 'Remove'}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
