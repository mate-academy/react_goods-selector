import React from 'react';
import './App.scss';
import './reset.scss';
import classNames from 'classnames';

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

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  alreadyHasGoods = (good: string) => {
    return this.state.selectedGoods.find(item => item === good);
  };

  productAdd = (product: string) => {
    if (product) {
      this.setState((state) => {
        return !this.alreadyHasGoods(product)
          ? {
            selectedGoods: [...state.selectedGoods, product],
          }
          : {
            selectedGoods: state.selectedGoods.filter(item => item !== product),
          };
      });
    }
  };

  selectedGoodsInfo = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  clearAllGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App App__wrapper">
        <div className="App__content">
          <h1 className="App__title">
            {this.selectedGoodsInfo()}
          </h1>
          {this.state.selectedGoods.length > 0 && (
            <button
              type="button"
              className="App__button App__button-clear"
              onClick={this.clearAllGoods}
            >
              X
            </button>
          )}
        </div>
        <section className="goods__wrapper">
          {goodsFromServer.map(good => (
            <div className="goods" key={good}>
              <div className={(classNames(
                'goods__content',
                {
                  goods__active: selectedGoods.includes(good),
                },
              ))}
              >
                <div className="goods__item">{good}</div>
                <button
                  type="button"
                  className="goods__button"
                  onClick={() => this.productAdd(good)}
                >
                  {!this.alreadyHasGoods(good) ? 'Add' : 'Remove'}
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
