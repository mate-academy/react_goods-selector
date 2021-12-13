import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  'Машинку на радио-управлении',
  'Сто миллионов миллиардов конфет',
  'Велосипед',
  'Куклу с домиком и лошадью',
  'Маме и папе здоровья',
  'Волшебную палочку, как у Гарри Поттера',
  'Собаку',
  'Красные черевички',
  'Надувную лодку',
  'Снегурочку 18+',
];

interface State {
  selectedGoods: string[],
}

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Машинку на радио-управлении'],
  };

  addGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter(
        (item) => item !== good,
      ),
    }));
  };

  removeAllGoods = () => (
    this.setState({ selectedGoods: [] })
  );

  getCardInfo = () => {
    const { selectedGoods } = this.state;
    const firstGood = selectedGoods.slice(0, 1)
      .map(el => el.charAt(0).toLowerCase() + el.slice(1));
    const lastGoodInList = selectedGoods.slice(-1)
      .map(el => el.charAt(0).toLowerCase() + el.slice(1));
    const lotOfGoods = selectedGoods.slice(0, -1)
      .map(el => el.charAt(0).toLowerCase() + el.slice(1)).join(', ');

    switch (selectedGoods.length) {
      case 0:
        return 'Я уже взрослый(ая), но от машинки не откажусь';
      case 1:
        return `Хочу ${firstGood}`;
      case 2:
        return `Хочу ${firstGood} и ${lastGoodInList}`;
      default:
        return `Хочу ${lotOfGoods} и ${lastGoodInList}`;
    }
  };

  render() {
    const { selectedGoods } = this.state;
    const displayedGoods = this.getCardInfo();

    return (
      <div className="App">
        <div className="App__container">
          <div className="App__info">
            <h1 className="App__title">
              Заказать подарки
              <br />
              у Деда Мороза:
            </h1>
            <div className="App__displayedGoods">
              {displayedGoods}
            </div>
            {selectedGoods.length > 0 && (
              <button
                className="App__button App__button--clear"
                type="button"
                onClick={this.removeAllGoods}
              >
                Ничего не хочу
              </button>
            )}
          </div>

          <ul className="App__list">
            {goodsFromServer.map((good) => {
              const isSelectedGood = selectedGoods.includes(good);

              return (
                <li key={good} className="App__item">
                  {good}
                  {isSelectedGood ? (
                    <button
                      className="App__button App__button--remove"
                      type="button"
                      onClick={() => this.removeGood(good)}
                    >
                      Больше не хочу
                    </button>
                  ) : (
                    <button
                      className="App__button App__button--add"
                      type="button"
                      onClick={() => this.addGood(good)}
                    >
                      Хочу
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
