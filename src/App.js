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

  goodsSelector = (goods) => {
    if (goods.length === 0) {
      return 'No goods selected';
    }

    if (goods.length === 1) {
      return `${goods[0]} is selected`;
    }

    return `${goods.slice(0, goods.length - 1).join(', ')}`
      + ` and ${goods[goods.length - 1]} are selected`;
  }

  removeGood = (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== good),
    }));
  }

  addGood = (good) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  }

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="Title">
          <h1 className="Title-text">
            {this.goodsSelector(selectedGoods)}
          </h1>
          {selectedGoods.length > 0 && (
            <button
              type="button"
              className="Title-button"
              onClick={this.clearGoods}
            >
              X
            </button>
          )
          }
        </div>

        <ul className="List">
          {goodsFromServer.map((good) => {
            const isSelected = selectedGoods.includes(good);

            return (
              <li key={good} className="List-item">
                <span>{good}</span>

                {!isSelected
                  && (
                    <button
                      type="button"
                      className="List-button List-button--add"
                      onClick={() => (
                        this.addGood(good))}
                    >
                      Add
                    </button>
                  )
                }

                {isSelected
                  && (
                    <button
                      type="button"
                      className="List-button List-button--remove"
                      onClick={() => (
                        this.removeGood(good)
                      )}
                    >
                      Remove
                    </button>
                  )
                }
                ;
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}

export default App;
