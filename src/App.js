import React from 'react';
import classNames from 'classnames';
import './App.scss';

const goodsFromServer = [
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

  selectGood = good => this.setState(prevState => ({
    selectedGoods: [...prevState.selectedGoods, good],
  }));

  deleteGood = good => (
    this.setState((prevState) => {
      const allGoods = [...prevState.selectedGoods];

      allGoods.splice(allGoods.indexOf(good), 1);

      return {
        selectedGoods: [...allGoods],
      };
    })
  );

  clearGoods = () => this.setState({ selectedGoods: [] });

  title = (goods) => {
    if (goods.length === 0) {
      return <span>No goods selected</span>;
    }

    if (goods.length === 1) {
      return <span>{`${goods[0]} is selected`}</span>;
    }

    const result = goods.slice(0, goods.length - 1).join(', ');

    return <span>{`${result} and ${goods[goods.length - 1]}`}</span>;
  };

  render() {
    return (
      <div className="App">
        <h1>
          {this.title(this.state.selectedGoods)}
          {this.state.selectedGoods.length !== 0 && (
            <button
              onClick={this.clearGoods}
              type="button"
            >
              X
            </button>
          )}
        </h1>
        <span>{goodsFromServer.length}</span>
        <ul>
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames({
                selected: this.state.selectedGoods.includes(good),
                unselected: !this.state.selectedGoods.includes(good),
              })}
            >
              {good}
              {this.state.selectedGoods.includes(good) ? (
                <button
                  className="remove"
                  onClick={() => this.deleteGood(good)}
                  type="button"
                >
                  Remove
                </button>
              ) : (
                <button
                  className="select"
                  onClick={() => this.selectGood(good)}
                  type="button"
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
