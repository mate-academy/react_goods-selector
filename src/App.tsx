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
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  clearGood = () => {
    this.setState({ selectedGood: '' });
  };

  selectGood = (good: string) => {
    const isSelected = this.state.selectedGood === good;

    return isSelected
      ? this.clearGood()
      : this.setState({ selectedGood: good });
  };

  mapCallback = (good: string) => {
    const isSelected = this.state.selectedGood === good;
    const buttonTag = isSelected ? 'Remove' : 'Select';

    return (
      <li
        className={classNames(
          'list__item',
          {
            'list__item--selected': this.state.selectedGood === good,
          },
        )}
        key={good}
      >
        {good}
        <div>
          <button
            type="button"
            className="button button__good"
            onClick={() => this.selectGood(good)}
          >
            {buttonTag}
          </button>
        </div>
      </li>
    );
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {selectedGood
          ? (
            <h1 className="header">
              {`You selected ${selectedGood}`}
            </h1>
          )
          : <h1 className="header">No goods selected</h1>}
        <div>
          <button
            type="button"
            className={classNames(
              'button__header',
              'button',
              {
                'button__header--clear': selectedGood !== '',
              },
            )}
            onClick={() => this.clearGood()}
          >
            Clear
          </button>
        </div>
        <ul className="list">
          {goodsFromServer.map(this.mapCallback)}
        </ul>
      </div>
    );
  }
}
export default App;
