import React from 'react';
import classNames from 'classnames';
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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  addGood = (good: string) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  removeGood = (good: string) => {
    this.setState(state => {
      const index = state.selectedGoods.indexOf(good);

      state.selectedGoods.splice(index, 1);

      return {
        selectedGoods: state.selectedGoods,
      };
    });
  };

  clearGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  showSelectedGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default: {
        const selectedGoodsAsString = selectedGoods.slice(0, -1).join(', ');
        const lastSelectedGood = selectedGoods[selectedGoods.length - 1];

        return `${selectedGoodsAsString} and ${lastSelectedGood} are selected`;
      }
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">{this.showSelectedGoods()}</h1>
        <div className="content">
          <h3>Goods:</h3>

          <ul className="list list-group">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={classNames('list__item', 'list-group-item',
                  { active: selectedGoods.includes(good) })}
              >
                {good}
                {'   '}
                {selectedGoods.includes(good)
                  ? (
                    <button
                      type="button"
                      onClick={() => this.removeGood(good)}
                      className="btn btn-outline-danger"
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={() => this.addGood(good)}
                      className="btn btn-outline-success"
                    >
                      Add
                    </button>
                  )}
              </li>
            ))}
          </ul>
          {selectedGoods.length > 0 && (
            <>
              <strong>Clear selection</strong>
              <button
                type="button"
                onClick={this.clearGoods}
                className="btn btn-outline-warning clear-button"
              >
                X
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
