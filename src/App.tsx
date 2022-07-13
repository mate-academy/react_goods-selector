import classNames from 'classnames';
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
  selected: string[],
};

class App extends Component<{}, State> {
  state = {
    selected: ['Jam'],
  };

  removeGood = (good: string) => {
    this.setState(state => (
      { selected: state.selected.filter(elem => elem !== good) }
    ));
  };

  addGood = (good: string) => {
    this.setState(state => (
      { selected: [...state.selected, good] }
    ));
  };

  render() {
    const { selected } = this.state;

    const selectedGoods = () => {
      switch (selected.length) {
        case 0:
          return 'No goods selected';

        case 1:
          return `${selected} is selected`;

        default:
          return `${selected.slice(0, -1).join(', ')} and ${selected[selected.length - 1]} are selected`;
      }
    };

    return (
      <div className="App">
        <h1 className="title">
          {selectedGoods()}
        </h1>
        <ul className="level">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames(
                'good',
                'level-item',
                'has-text-centered',
                {
                  'good--selected': selected.includes(good),
                },
              )}
            >
              {good}
              <div className="good__button">
                {selected.includes(good) ? (
                  <button
                    type="button"
                    className="button is-link"
                    onClick={() => this.removeGood(good)}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button is-primary"
                    onClick={() => this.addGood(good)}
                  >
                    Select
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
