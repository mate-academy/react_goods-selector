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
    selectedGoods: ['Jam'],
  }

  selecedProducts = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return `No goods selected`;
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `${selectedGoods.join(', ')} are selected`;
    }
  }

  addGood = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  }

  removeGood = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(
        product => product !== good,
      ),
    }));
  }

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected goods: ${this.selecedProducts()} `}
          <button
            type="button"
            onClick={this.clearGoods}
            className={selectedGoods.length
              ? 'clearButton'
              : 'clearButton--active'
            }
          >
            clear
          </button>
        </h1>
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                selectedGoods.includes(good)
                  ? 'selected--active'
                  : 'selected'
                }
            >
              <span>{`${good} `}</span>
              <button
                type="button"
                onClick={() => (
                  selectedGoods.includes(good)
                    ? this.removeGood(good)
                    : this.addGood(good)
                )}
                className="selectButton"
              >
                {selectedGoods.includes(good)
                  ? 'Remove'
                  : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
