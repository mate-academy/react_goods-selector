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
  };

  addGoods = (goods) => {
    if (this.state.selectedGoods.includes(goods)) {
      return;
    }

    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, goods],
    }));
  }

  deleteGoods = (goods) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(product => product !== goods),
    }));
  }

  clearGoods = (goods) => {
    this.setState({ selectedGoods: [] });
  }

  createTitle = () => {
    let title = '';
    const { selectedGoods } = this.state;
    const listOfGoods = selectedGoods.slice(0, -1);

    if (selectedGoods.length === 1) {
      title = `${selectedGoods} is selected`;
    }

    if (selectedGoods.length > 1) {
      // eslint-disable-next-line
      title += `${listOfGoods.join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }

    if (selectedGoods.length === 0) {
      title = `No goods selected`;
    }

    return title;
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {this.createTitle()}
        </h1>
        <ul className="goodList">
          {goodsFromServer.map((goods) => {
            const selected = this.state.selectedGoods.includes(goods);

            return (
              <li
                key={goods}
                className={selected ? 'selected' : 'notSelected'}
              >
                {goods}
                {selected
                  ? (
                    // eslint-disable-next-line
                    <button
                      className="button"
                      type="button"
                      onClick={() => this.deleteGoods(goods)}
                    >
                      ❌
                    </button>
                  )
                  : (
                    // eslint-disable-next-line
                    <button
                      className="button"
                      type="button"
                      onClick={() => this.addGoods(goods)}
                    >
                      ✅
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
              className="clearButton"
              type="button"
              onClick={this.clearGoods}
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

export default App;
