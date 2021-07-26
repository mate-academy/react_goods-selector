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
                  {selectedGoods.map(good => (
                    <span>
                      {
                     good === selectedGoods[0]
                       ? `${good}`
                       : `, ${good}`
                     }

                    </span>
                  ))}
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
