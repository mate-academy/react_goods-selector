import classNames from 'classnames';
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

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  };

  getHeadline = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    const lastEl = selectedGoods[selectedGoods.length - 1];
    const firstElements = selectedGoods.slice(0, -1).map((item) => {
      return item;
    });

    return `${firstElements.join(', ')} and ${lastEl} are selected`;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="app-header">
          <h1>
            { `${this.getHeadline()}` }
          </h1>
          <button
            type="button"
            className={classNames(
              'removeAll',
              'button',
              { removeAll_invisible: selectedGoods.length === 0 },
            )}
            onClick={() => {
              this.setState({
                selectedGoods: [],
              });
            }}
          >
            X
          </button>
        </div>

        <ul className="goods-list">
          {goodsFromServer.map(item => {
            return (
              <li
                key={item}
                className={classNames(
                  'goods-list__item',
                  { 'goods-list__item_active': selectedGoods.includes(item) },
                )}
              >
                <span className="goods-list__good">{item}</span>
                <button
                  className={classNames(
                    'goods-list__button',
                    'button',
                    { 'goods-list__button_add': !selectedGoods.includes(item) },
                  )}
                  type="button"
                  onClick={() => {
                    type Prev = {
                      selectedGoods: []
                    };
                    this.setState((prevState: Prev) => {
                      if (selectedGoods.includes(item)) {
                        prevState.selectedGoods.splice(
                          (selectedGoods.indexOf(item)), 1,
                        );

                        return prevState;
                      }

                      return {
                        selectedGoods: [...prevState.selectedGoods, item],
                      };
                    });
                  }}
                >
                  {
                    (selectedGoods.includes(item)) ? 'Remove' : 'Add'
                  }
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
