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
    let result = '';

    switch (selectedGoods.length) {
      case 0:
        result = 'No goods selected';
        break;

      case 1:
        result = `${selectedGoods[0]} is selected`;
        break;

      default: result = `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }

    return result;
  };

  addGood = (good: string) => {
    this.setState((prevState) => {
      return {
        selectedGoods: [...prevState.selectedGoods, good],
      };
    });
  };

  removeGood = (good: string) => {
    this.setState((prevState) => {
      return {
        selectedGoods: prevState.selectedGoods.filter(item => good !== item),
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
            goodsFromServer.map(good => (
              <li
                key={good}
                className={selectedGoods.includes(good)
                  ? 'App__item App__item--active'
                  : 'App__item'}
              >
                {good}
                <button
                  type="button"
                  onClick={
                    selectedGoods.includes(good)
                      ? () => this.removeGood(good)
                      : () => this.addGood(good)
                  }
                  className="App__list-btn"
                >
                  {
                    selectedGoods.includes(good)
                      ? 'Remove'
                      : 'Add'
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
