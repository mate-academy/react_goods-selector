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

const preparedListGoods = goodsFromServer.map((name, index) => (
  {
    name,
    index: index + 1,
  }
));

class App extends React.Component {
  state = {
    selectedGoods: [],
  };

  addGood = (goodName) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, goodName],
    }));
  }

  deleteGood = (goodName) => {
    this.setState((prevState) => {
      const filteredGoods = prevState.selectedGoods.filter(
        selectedGoodName => selectedGoodName !== goodName,
      );

      return {
        selectedGoods: filteredGoods,
      };
    });
  }

  resetGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  showTitleText = goodsLength => (goodsLength > 1
    ? 'are selected'
    : 'is selected')

  render() {
    const { selectedGoods } = this.state;
    const listLength = selectedGoods.length;

    return (
      <div className="App">
        <div className="wrap">
          {
            listLength
              ? (
                <>
                  <h1>
                    {selectedGoods.join(', ')}
                    {' '}
                    {this.showTitleText(listLength)}
                  </h1>
                  <button
                    type="button"
                    onClick={this.resetGoods}
                    className="button"
                  >
                    Reset
                  </button>
                </>
              )
              : <h1>No goods selected</h1>
          }
        </div>

        {
          preparedListGoods.map(good => (
            <div className="wrap" key={good.index}>
              <span
                className={selectedGoods.includes(good.name) ? 'selected' : ''}
              >
                {good.name}
              </span>
              {
                selectedGoods.includes(good.name)
                  ? (
                    <button
                      type="button"
                      onClick={() => this.deleteGood(good.name)}
                      className="button button--red"
                    >
                      Delete
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={() => this.addGood(good.name)}
                      className="button"
                    >
                      Select
                    </button>
                  )
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
