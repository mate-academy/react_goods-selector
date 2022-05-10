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

  unselectAll = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  getTitle = (selectedGoods: string[]) => {
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

    return title;
  };

  render() {
    const {
      selectedGoods,
    } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          <span>{this.getTitle(selectedGoods)}</span>
          {selectedGoods.length > 0
          && (
            <button
              type="button"
              className="app__button"
              onClick={this.unselectAll}
            >
              Clear
            </button>
          )}
        </h1>

        <ul className="goods">
          {
            goodsFromServer.map((good) => {
              const isGoodIncludes = selectedGoods.includes(good);

              return (
                <li
                  key={good}
                  className={
                    classNames(
                      'goods__item',
                      { 'goods__item--selected': isGoodIncludes },
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
                      isGoodIncludes
                        ? 'Remove'
                        : 'Select'
                    }
                  </button>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
