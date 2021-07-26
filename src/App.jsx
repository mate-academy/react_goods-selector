import React, { Component } from 'react';
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

class App extends Component {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (good) => {
    if (!this.state.selectedGoods.includes(good)) {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods, good],
      }));
    }
  }

  unSelectGood = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(item => item !== good),
    }));
  }

  clearGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  }

  showGoods = () => {
    let message = '';
    const selected = this.state.selectedGoods;
    const len = selected.length;
    const firstGood = selected[0];
    const lastGood = selected[len - 1];
    const lastExcludedGoods = selected.slice(0, len - 1).join(', ');

    switch (len) {
      case 0:
        message = `No goods selected`;
        break;

      case 1:
        message = `${firstGood} is selected`;
        break;

      default:
        message = `${lastExcludedGoods} and ${lastGood} are selected`;
    }

    return message;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {this.showGoods()}
        </h1>
        {selectedGoods.length
          ? (
            <button
              type="button"
              onClick={this.clearGoods}
            >
              X
            </button>
          )
          : (<span> </span>)
        }

        <ul className="goods">
          {goodsFromServer.map(good => (
            <>
              <li>
                <span
                  key="good"
                  className={
                  selectedGoods.includes(good)
                    ? 'selected'
                    : 'unSelected'
                  }
                >
                  {good}
                </span>
              </li>
              <button
                type="button"
                onClick={() => this.selectGood(good)}
              >
                {selectedGoods.length
                  ? 'Add'
                  : 'Select'
                }
              </button>
              {selectedGoods.length
                ? (
                  <button
                    type="button"
                    onClick={() => this.unSelectGood(good)}
                  >
                    Remove
                  </button>
                )
                : (<span> </span>)
              }
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
