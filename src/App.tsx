import React from 'react';
import classNames from 'classnames';
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
  selectedGoods: string[]
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  chooseGoodsHandler = (item: string) => {
    const { selectedGoods } = this.state;

    if (!(selectedGoods.includes(item))) {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods, item],
      }));
    }
  };

  RemoveGoodsHandler = (item: string) => {
    this.setState(prevState => ({
      selectedGoods:
       prevState.selectedGoods.filter(element => element !== item),
    }));
  };

  resetSelectedGoods() {
    this.setState({
      selectedGoods: [],
    });
  }

  showGoodsHandler() {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      case 2:
        return `${selectedGoods.join(' and ')} are selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.showGoodsHandler()}
          {selectedGoods.length > 0
            && (
              <button
                type="button"
                className="App__button-reset"
                onClick={() => (
                  this.resetSelectedGoods()
                )}
              >
                X
              </button>
            )}
        </h1>
        <ul className="App__list">
          {goodsFromServer.map((item: string) => (
            <li
              className={classNames(
                'App__item',
                {
                  active: (this.state.selectedGoods.includes(item)),
                },
              )}
              key={item}
            >
              {item}
              <div>
                <button
                  type="button"
                  className="App__button-choose"
                  onClick={() => {
                    this.chooseGoodsHandler(item);
                  }}
                >
                  Add
                </button>
                <button
                  type="button"
                  className="App__button-remove"
                  onClick={() => {
                    this.RemoveGoodsHandler(item);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
