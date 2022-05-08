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

interface State {
  selectedGoods: string[],
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  selectHandler = (good: string) => {
    this.setState((prevState) => {
      if (prevState.selectedGoods.includes(good)) {
        const newGoods = prevState.selectedGoods
          .filter((item) => item !== good);

        return {
          selectedGoods: newGoods,
        };
      }

      const newGoods = [...prevState.selectedGoods, good];

      return {
        selectedGoods: newGoods,
      };
    });
  };

  render() {
    const {
      selectedGoods,
    } = this.state;

    let title = '';

    switch (selectedGoods.length) {
      case 0:
        title = 'No goods selected';
        break;

      case 1:
        title = `${selectedGoods[0]} is selected`;
        break;

      default: {
        const strPart1 = selectedGoods.slice(0, -1).join(',\n');
        const strPart2 = selectedGoods.slice(-1);

        title = `${strPart1} and ${strPart2} are selected`;
      }
    }

    return (
      <div className="app">
        <h1 className="app__title">
          {title}
        </h1>
        <ul className="goods">
          {
            goodsFromServer.map((good) => (
              <li
                key={good}
                className={
                  classNames(
                    'goods__item',
                    { 'goods__item--selected': selectedGoods.includes(good) },
                  )
                }
              >
                <span>{good}</span>
                {'\n'}
                <button
                  type="button"
                  className="goods__button"
                  onClick={() => this.selectHandler(good)}
                >
                  {
                    selectedGoods.includes(good)
                      ? 'Remove'
                      : 'Select'
                  }
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
