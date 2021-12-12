import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Булочка',
  'Вафелька',
  'Пряничек',
  'Пампушечка',
  'Печенька',
  'Пирожочек',
  'Бублик',
  'Пончик',
  'Пироженка',
  'Кренделёк',
];

interface State {
  selectedGoods: string[],
}

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Вафелька'],
  };

  addGood = (newGood: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, newGood],
    }
    ));
  };

  removeGood = (goodToRemove: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(
        (good) => good !== goodToRemove,
      ),
    }
    ));
  };

  clearGoods = () => (
    this.setState({ selectedGoods: [] })
  );

  getDisplayingGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'Ничего не выбрано ;(';
      case 1:
        return `${selectedGoods[0]} в вашей корзинке`;
      case 2:
        return `${selectedGoods[0]} и ${selectedGoods[1]} в вашей корзинке`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} и ${selectedGoods.slice(-1)} в вашей корзинке`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    const goodsToDisplay = this.getDisplayingGoods();

    return (
      <div className="App">
        <div className="App__container">
          <div className="App__titleInfo">
            <h1 className="App__title">
              Выбранные штучки:
              <br />
              <span className="App__selectedItems">
                {goodsToDisplay}
              </span>
            </h1>
            {selectedGoods.length > 0 && (
              <button
                className="App__button App__button--clear"
                type="button"
                onClick={this.clearGoods}
              >
                X
              </button>
            )}
          </div>

          <ul className="App__list">
            {goodsFromServer.map((good) => {
              const isGoodSelected = selectedGoods.includes(good);

              return (
                <li key={good} className="App__item">
                  {good}
                  {isGoodSelected ? (
                    <button
                      className="App__button"
                      type="button"
                      onClick={() => this.removeGood(good)}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      className="App__button"
                      type="button"
                      onClick={() => this.addGood(good)}
                    >
                      Add
                    </button>
                  )}
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
