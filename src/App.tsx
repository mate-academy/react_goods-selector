import React from 'react';
import classnames from 'classnames';
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
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  clearSelection = () => this.setState({ selectedGoods: [] });

  addGoods = (good: string) => {
    this.setState((element) => {
      return {
        selectedGoods: [...element.selectedGoods, good],
      };
    });
  };

  removeGood = (good: string) => {
    this.setState((element) => {
      return {
        selectedGoods: element.selectedGoods
          .filter(item => good !== item),
      };
    });
  };

  formatTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return ' No selected goods';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]}`;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected goods:
          {this.formatTitle()}
        </h1>
        {selectedGoods.length
          ? (
            <button
              type="button"
              onClick={this.clearSelection}
            >
              X
            </button>
          )
          : ' '}
        <ul className="App__list">
          {
            goodsFromServer.map(
              good => {
                const isGoodSelected: boolean = selectedGoods.includes(good);

                const buttonCallback = isGoodSelected
                  ? () => this.removeGood(good)
                  : () => this.addGoods(good);

                const buttonTitle = isGoodSelected
                  ? 'Remove good'
                  : 'Add good';

                const buttonToRender = (
                  <button
                    type="button"
                    onClick={buttonCallback}
                    className="button"
                  >
                    {buttonTitle}
                  </button>
                );

                return (
                  <li
                    className={classnames(
                      { 'App__list--element': true },
                      { active: isGoodSelected },
                    )}
                    key={good}
                  >
                    <div className="App__list--good">{good}</div>
                    {' '}
                    {buttonToRender}
                  </li>
                );
              },

            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
