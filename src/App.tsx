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

interface State {
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  getTitle = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods
          .slice(0, -1)
          .join(', ')} and ${selectedGoods
          .slice(-1)} are selected`;
    }
  };

  addGood = (good: string) => {
    const { selectedGoods } = this.state;

    this.setState({
      selectedGoods: [...selectedGoods, good],
    });
  };

  removeGood = (good: string) => {
    this.setState((prevState) => {
      return {
        selectedGoods: prevState.selectedGoods
          .filter(item => good !== item),
      };
    });
  };

  clearList = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.getTitle()}
        </h1>

        <button
          type="button"
          onClick={this.clearList}
          className={`App__clear-btn ${selectedGoods.length > 0
            ? 'App__clear-btn App__clear-btn--active'
            : 'App__clear-btn'}`}
        >
          Clear selected
        </button>

        <ul className="App__list">
          {
            goodsFromServer.map(good => {
              const isSelectedGood = selectedGoods.includes(good);

              return (
                <li
                  key={good}
                  className={isSelectedGood
                    ? 'App__item App__item--selected'
                    : 'App__item'}
                >
                  {good}
                  <button
                    type="button"
                    onClick={
                      isSelectedGood
                        ? () => this.removeGood(good)
                        : () => this.addGood(good)
                    }
                    className="App__list-btn"
                  >
                    {
                      isSelectedGood
                        ? 'Remove'
                        : 'Add'
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
