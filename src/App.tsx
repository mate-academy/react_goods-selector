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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  handlerSelect = (method: string, data: string) => {
    if (method === 'Select') {
      this.setState(state => ({
        selectedGoods: [...state.selectedGoods, data],
      }));
    } else (method === 'Remove') {
      this.setState(state => ({
        selectedGoods: state.selectedGoods.filter(good => good !== data),
      }));
    }
  };

  clearSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="selector">
          <div className="selector__header">
            <h1 className="selector__header-title">
              {
                selectedGoods.length
                  ? <span>{selectedGoods.join(', ')}</span>
                  : 'No goods selected'
              }
            </h1>
            {
              Boolean(selectedGoods.length) && (
                <button
                  type="button"
                  className="selector__header-clear"
                  onClick={this.clearSelectedGoods}
                >
                  Clear
                </button>
              )
            }

          </div>
          <ul className="selector__list">
            {goodsFromServer.map(good => {
              const isSelected = selectedGoods.includes(good);

              return (
                <li
                  key={good}
                  className={
                    classNames(
                      'selector__list-item',
                      {
                        'selector__list-item--selected': isSelected,
                      },
                    )
                  }
                >
                  <div>{good}</div>
                  <button
                    type="button"
                    className="selector__list-item-btn"
                    onClick={() => this.handlerSelect(
                      isSelected
                        ? 'Remove'
                        : 'Select',
                      good,
                    )}
                  >
                    {
                      isSelected
                        ? 'Remove'
                        : 'Select'
                    }
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
