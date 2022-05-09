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

export class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  isSelected = (good: string) => {
    if (this.state.selectedGoods.includes(good)) {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.filter(el => el !== good),
      }));
    } else {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.concat(good),
      }));
    }
  };

  resetSelectedGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    let message = 'No goods selected';

    if (selectedGoods.length === 1) {
      message = `${selectedGoods[0]} is selected`;
    } else if (selectedGoods.length > 1) {
      message = `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }

    return (
      <div className="App">
        <div className="goods">
          <div className="goods__selected">
            <h1 className="goods__selected-message">{message}</h1>

            <button
              className={classNames('button',
                { 'button--hidden': selectedGoods.length === 0 })}
              type="button"
              onClick={() => (
                this.setState({ selectedGoods: [] })
              )}
            >
              Clear
            </button>
          </div>

          <ul className="goods__list">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={classNames('goods__good',
                  { 'goods__good--selected': selectedGoods.includes(good) })}
              >
                <span>{good}</span>

                <button
                  className="button"
                  type="button"
                  onClick={() => {
                    this.isSelected(good);
                  }}
                >
                  {this.state.selectedGoods.includes(good)
                    ? 'Remove'
                    : 'Select'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
