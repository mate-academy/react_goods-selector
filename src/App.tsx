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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  onClick = (good: string) => {
    if (this.state.selectedGood !== good) {
      this.setState({ selectedGood: good });
    } else {
      this.setState({ selectedGood: '' });
    }
  };

  getTitle = () => {
    const { selectedGood } = this.state;
    const selectedTitle = `${selectedGood} is selected`;
    const emptyTitle = 'No goods selected';

    return selectedGood ? selectedTitle : emptyTitle;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <h1 className="goods">
          {`Selected good: ${this.getTitle()}`}
          {' '}
          {selectedGood && (
            <button
              className="button is-success is-light"
              type="button"
              onClick={() => this.setState({ selectedGood: '' })}
            >
              Clear
            </button>
          )}
        </h1>
        <ul className="goods__list">
          {goodsFromServer.map(good => (
            <li className={`goods__item ${good === selectedGood ? 'goods__item--selected' : ''} `} key={good}>
              {good}
              <button
                className="button is-success is-light"
                type="button"
                onClick={() => this.onClick(good)}
              >
                {good === selectedGood ? 'Remove' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
