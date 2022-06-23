import { Component } from 'react';
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
  selectedGood: string[];
};

type Props = {
};

class App extends Component<Props, State> {
  state = {
    selectedGood: ['Jam'],
  };

  addGood = (name:string) => {
    this.setState((state) => ({
      ...state,
      // eslint-disable-next-line
      selectedGood: [...this.state.selectedGood, name],
    }));
  };

  removeGood = (name:string) => {
    this.setState((state) => ({
      ...state,
      // eslint-disable-next-line
      selectedGood: this.state.selectedGood.filter(elem => elem !== name),
    }));
  };

  clearAll = () => {
    this.setState({
      selectedGood: [],
    });
  };

  selectAll = () => {
    this.setState({
      selectedGood: [...goodsFromServer],
    });
  };

  render() {
    const { selectedGood } = this.state;
    const text = selectedGood.length > 0
      // eslint-disable-next-line
      ? selectedGood.join(', ') + ' is selected'
      : 'No goods selected';

    return (
      <div className="App">
        <h1>
          Selected good:
          {text}
        </h1>
        <ul>
          {goodsFromServer.map(good => {
            const className = selectedGood.includes(good)
              ? 'good__item selected'
              : 'good__item not-selected';

            return (
              <li
                key={good}
                className={className}
              >
                <span>{good}</span>
                <button
                  type="button"
                  className="good__item_status cursor"
                  onClick={
                    selectedGood.includes(good)
                      ? () => {
                        this.removeGood(good);
                      }
                      : () => {
                        this.addGood(good);
                      }
                  }
                >
                  { selectedGood.includes(good) ? 'Remove' : 'Select' }
                </button>
              </li>
            );
          })}
        </ul>

        <div className="for__buttons">
          {selectedGood.length > 0
          && (
            <button
              type="button"
              className="cursor"
              onClick={this.clearAll}
            >
              Clear
            </button>
          )}

          <button
            type="button"
            className="cursor"
            onClick={this.selectAll}
          >
            Select All
          </button>
        </div>
      </div>
    );
  }
}

export default App;
