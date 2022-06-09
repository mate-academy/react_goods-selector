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

type Props = {};

type State = {
  selectedGoods: string[],
};

class App extends React.Component<Props, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  selectGood = (good: string) => {
    this.setState(state => {
      if (state.selectedGoods.includes(good)) {
        return {
          selectedGoods: state.selectedGoods
            .filter((item) => item !== good),
        };
      }

      return {
        selectedGoods: [...state.selectedGoods, good],
      };
    });
  };

  removeGood = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;
    const currentTitle = selectedGoods.slice(-1);
    const previousTitle = selectedGoods.slice(0, -1).join(', ');
    let title = '';

    switch (selectedGoods.length) {
      case 0:
        title = 'No goods selected';
        break;

      case 1:
        title = `${selectedGoods[0]} is selected`;
        break;

      default: {
        title = `${previousTitle} and ${currentTitle} are selected`;
      }
    }

    return (
      <div className="App">
        <h1>{title}</h1>
        {selectedGoods.length && (
          <button
            type="button"
            onClick={this.removeGood}
            className="button"
          >
            Clear
          </button>
        )}

        <ol className="list">
          {goodsFromServer.map(good => (
            <li key={good} className="list__item">
              {good}
              <button
                type="button"
                className={`button button--${selectedGoods.includes(good)}`}
                onClick={() => {
                  this.selectGood(good);
                }}
              >
                {
                  selectedGoods.includes(good)
                    ? 'Remove'
                    : 'Select'
                }
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
