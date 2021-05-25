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

export class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  addGood = (good) => {
    if (this.state.selectedGoods.includes(good)) {
      return;
    }

    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  }

  removeGood = (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(product => product !== good),
    }));
  }

  clearSelection = () => {
    this.setState({ selectedGoods: [] });
  }

  stringMaker = () => {
    let title = '';
    const { selectedGoods } = this.state;
    const arr = selectedGoods.slice(0, -1);

    if (selectedGoods.length === 1) {
      title = `${selectedGoods} is selected`;
    }

    if (selectedGoods.length > 1) {
      // eslint-disable-next-line
      title += `${arr.join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }

    if (selectedGoods.length === 0) {
      title = 'Please Select Anything';
    }

    return title;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {this.stringMaker()}
        </h1>
        <ul className="goodsList">
          {goodsFromServer.map((good) => {
            const isSelected = this.state.selectedGoods.includes(good);

            return (
              <li
                key={good}
                className={isSelected ? 'trueEl' : 'falseEl'}
              >
                {good}
                {isSelected
                  ? (
                    <button
                      className="btn"
                      type="button"
                      onClick={() => this.removeGood(good)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      className="btn"
                      type="button"
                      onClick={() => this.addGood(good)}
                    >
                      Add Good
                    </button>
                  )
                }
              </li>
            );
          })}
        </ul>
        {selectedGoods.length > 0
          ? (
            <button
              className="clearBtn"
              type="button"
              onClick={this.clearSelection}
            >
              Clear all
            </button>
          )
          : null
        }
      </div>
    );
  }
}
