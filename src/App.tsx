import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  clearSelectedGood = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    this.setState({ selectedGood: good });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">
          {selectedGood === ''
            ? 'No goods selected'
            : `Selected good: ${selectedGood}`}
        </h1>

        {selectedGood !== '' && (
          <div>
            <button
              className="app__button--x"
              type="button"
              onClick={this.clearSelectedGood}
            >
              Х
            </button>
          </div>
        )}

        <ul className="app__list">
          {goodsFromServer.map(good => (
            <li key={good} className={classNames('app__item', { app__item_active: good === selectedGood })}>
              <p className="app__good-name">{good}</p>

              <button
                type="button"
                className="app__button"
                onClick={() => this.selectGood(good)}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
