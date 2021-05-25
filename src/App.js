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

  reset = () => {
    this.setState({ selectedGoods: [] });
  }

  title = (param) => {
    switch (param.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${param[0]} is selected`;
      default:
        return `${param.slice(0, -1).join(', ')}`
          + ` and ${param[param.length - 1]} is selected `;
    }
  }

  remove(good) {
    this.setState(param => ({ selectedGoods: param.selectedGoods.filter(
      element => element !== good,
    ) }));
  }

  add(good) {
    this.setState(({ selectedGoods }) => ({
      selectedGoods: [...selectedGoods, good],
    }));
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          <>
            {this.title(selectedGoods)}

            {selectedGoods.length > 0 && (
              <button
                type="button"
                onClick={this.reset}
              >
                X
              </button>
            )}
          </>
        </h1>

        <ul>
          {goodsFromServer.map((good) => {
            const isIncluded = selectedGoods.includes(good);

            return (
              <>
                <li
                  key={good}
                  className={isIncluded
                    ? 'selected'
                    : ''
                  }
                >
                  {good}
                </li>

                {isIncluded
                  ? (
                    <button
                      type="button"
                      onClick={this.remove.bind(this, good)}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={this.add.bind(this, good)}
                    >
                      Add
                    </button>
                  )}
              </>
            );
          })
          }
        </ul>
      </div>
    );
  }
}

export default App;
