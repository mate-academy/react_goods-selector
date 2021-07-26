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
        {
          !selectedGoods.length
            ? (
              <>
                <h1>
                  No goods selected
                </h1>
                <ul>
                  {goodsFromServer.map(good => (
                    <React.Fragment>
                      <li>
                        {good}
                      </li>
                      <button
                        type="button"
                        onClick={() => this.selectGood(good)}
                      >
                        Select
                      </button>
                    </React.Fragment>
                  ))}
                </ul>
              </>
            )
            : (
              <>
                <h1>
                  {this.showGoods()}
                </h1>
                <button
                  type="button"
                  onClick={this.clearGoods}
                >
                  Clear goods
                </button>
                <ul className="goods">
                  {goodsFromServer.map(good => (
                    <React.Fragment>
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
                        Add
                      </button>
                      <button
                        type="button"
                        onClick={() => this.unSelectGood(good)}
                      >
                        Remove
                      </button>
                    </React.Fragment>
                  ))}
                </ul>
              </>
            )
        }
      </div>
    );
  }
}

export default App;
