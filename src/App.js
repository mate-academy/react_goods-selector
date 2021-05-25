import React from 'react';
import './App.scss';

const goodsFromServer = [
  'Dumplings',
  'Cgoodsot',
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

  clearAll = () => {
    this.setState({ selectedGoods: [] });
  }

  btnRemove = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(
        product => product !== good,
      ),
    }));
  }

  title = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0: {
        return 'No goods selected';
      }

      case 1: {
        return `${selectedGoods.join(', ')} is selected`;
      }

      default: {
        return `${selectedGoods
          .slice(0, (selectedGoods.length - 1))
          .join(', ')}`
        + ` and ${selectedGoods[selectedGoods.length - 1]}`
        + ` are selected`;
      }
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {this.title()}
          {selectedGoods.length > 0 && (
            <button
              className="clear"
              type="button"
              onClick={this.clearAll}
            >
              乂
            </button>
          )}
        </h1>
        <div className="wrapper">
          {goodsFromServer.map((good) => {
            const isIncluded = selectedGoods.includes(good);

            return (
              <div className="goods__item" key={good}>
                <span>
                  {good}
                </span>

                <button
                  type="button"
                  className={`btn ${isIncluded && 'good__hidden'}`}
                  onClick={() => {
                    this.setState({
                      selectedGoods: [...selectedGoods, good],
                    });
                  }}
                >
                  Add
                </button>

                <button
                  type="button"
                  className={`good__remove ${!isIncluded && 'good__hidden'}`}
                  onClick={() => this.btnRemove(good)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
