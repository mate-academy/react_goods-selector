import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

type State = {
  selectedGoods: string[]
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  getGoodsTitle() {
    if (this.state.selectedGoods.length === 0) {
      return 'No goods selected';
    }

    if (this.state.selectedGoods.length === 1) {
      return `${this.state.selectedGoods[0]} is selected`;
    }

    return `${this.state.selectedGoods.slice(0, -1).join(', ')
    } and ${this.state.selectedGoods.slice(-1)} are selected`;
  }

  render() {
    return (
      <div className="
        container
        is-max-desktop
        is-flex
        is-flex-direction-column
        is-align-items-center
        notification
        is-light
      "
      >
        <progress
          className="progress is-info"
          value={this.state.selectedGoods.length}
          max={goodsFromServer.length}
        />

        <h1 className="title is-3 has-text-centered">{this.getGoodsTitle()}</h1>

        <ul>
          {goodsFromServer.map(good => (
            <li
              className={`
                box
                is-flex
                is-justify-content-space-between
                is-align-items-center
                mb-3
                ${this.state.selectedGoods.includes(good) && 'has-background-primary'}
              `}
              key={good}
            >
              {good}

              <button
                type="button"
                className={`
                button
                ml-6
                ${this.state.selectedGoods.includes(good) ? 'is-danger' : 'is-success'}
                `}
                onClick={() => {
                  this.setState(state => ({
                    selectedGoods: (!state.selectedGoods.includes(good))
                      ? [...state.selectedGoods, good]
                      : [...state.selectedGoods
                        .filter(selected => (selected !== good))],
                  }));
                }}
              >
                {this.state.selectedGoods.includes(good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>

        {this.state.selectedGoods.length > 0 && (
          <button
            type="button"
            className="button is-warning"
            onClick={() => {
              this.setState({ selectedGoods: [] });
            }}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default App;
