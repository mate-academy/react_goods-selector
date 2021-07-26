import React from 'react';
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
    selectedGoods: [goodsFromServer[8]],
  }

  addGood = (good) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  }

  removeGood = (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== good),
    }));
  }

  removeAllGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  getListOfOrder = () => {
    const { selectedGoods } = this.state;

    let message = '';
    const lastItem = selectedGoods.slice(-1);

    const restOfItems = selectedGoods.slice(0, selectedGoods.length - 1);

    switch (selectedGoods.length) {
      case (0):
        message = 'No goods selected';
        break;

      case (1):
        message = `${selectedGoods.join('')} is selected`;
        break;

      case (2):
        message = `${selectedGoods.join(' and ')} are selected`;
        break;

      default:
        message = `${restOfItems.join(`, `)} and ${lastItem.join('')}
        are selected`;
    }

    return message;
  }

  render() {
    return (
      <div className="App">
        <h1>
          {this.getListOfOrder()}
        </h1>

        <button
          type="button"
          className={this.state.selectedGoods.length > 0
            ? 'showButton'
            : 'hideButton'
          }
          onClick={this.removeAllGoods}
        >
          X
        </button>

        <ul>
          {goodsFromServer.map((item) => {
            const isProductSelected = this.state.selectedGoods.includes(item);

            return (
              <li
                key={item}
                className={isProductSelected
                  ? 'added'
                  : 'notAdded'
                }
              >
                <div className="item">
                  {item}
                </div>

                <button
                  type="button"
                  className="buttonToAdd"
                  onClick={() => this.addGood(item)}
                >
                  Add
                </button>

                <button
                  type="button"
                  className="buttonToRemove"
                  onClick={() => this.removeGood(item)}
                >
                  Remove
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
