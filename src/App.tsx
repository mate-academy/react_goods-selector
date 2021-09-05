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
  selectedGood: string | null;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__title">
          {this.state.selectedGood
            ? (`${this.state.selectedGood} is selected`)
            : ('No goods selected')}
        </h1>
        <button
          type="button"
          className="app__button"
          onClick={() => this.setState({ selectedGood: null })}
          disabled={!this.state.selectedGood}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map(good => {
            const selected = good === this.state.selectedGood;

            return (
              <div>
                <li key={good} className={classNames('app__item', { app__selected: selected })}>{good}</li>
                {!selected
                  && (
                    <button
                      type="button"
                      className="app__button"
                      onClick={() => {
                        this.setState({ selectedGood: good });
                      }}
                    >
                      Select
                    </button>
                  )}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
