import React from 'react';
import './App.scss';
import ClassNames from 'classnames';

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
    allGoods: goodsFromServer,
    selectedGoods: [],
  }

  clearAll = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  addSelected = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  }

  removeSelected = (good) => {
    this.setState((prevState) => {
      const i = prevState.selectedGoods.indexOf(good);

      prevState.selectedGoods.splice(i, 1);

      return (
        {
          selectedGoods: prevState.selectedGoods,
        }
      );
    });
  }

  render() {
    const { allGoods, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">
          Selected goods:
          {' '}
          {selectedGoods.length}
        </h1>

        {selectedGoods.map(good => (
          <span
            key={good}
            className="App__selected"
          >
            {`${good}, `}
          </span>
        ))}
        <br />

        {selectedGoods.length < 10 && selectedGoods.length !== 0
          ? (
            <button
              type="button"
              className="App__clear-button"
              onClick={this.clearAll}
            >
              Clear all
            </button>
          )
          : ''
        }

        <ul className="App__list">
          {allGoods.map(good => (
            <li
              className={ClassNames('App__list-item',
                { 'App__list-item--active': selectedGoods.includes(good) })}
              key={good}
            >
              {good}

              <button
                className="App__list-item-button"
                type="button"
                onClick={() => (selectedGoods.includes(good)
                  ? this.removeSelected(good)
                  : this.addSelected(good))}
              >

                Select / Remove
              </button>

            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default App;
