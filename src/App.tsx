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
  selectedGood: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  clickHandler(good: string) {
    this.setState({ selectedGood: good });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        {selectedGood
          ? (
            <>
              <h1 className="header">{`${selectedGood} is selected`}</h1>

              <button
                type="button"
                className="ui button mini"
                onClick={() => this.clickHandler('')}
              >
                Clear
              </button>
            </>
          )
          : <h1 className="header">No goods selected</h1>}
        <ul>
          {goodsFromServer.map(good => {
            const isSelected = this.state.selectedGood.includes(good);
            const buttonSelect = isSelected ? 'Remove' : 'Select';

            return (
              <div className="ui container" key={good}>
                <li
                  className={classNames(
                    'list__item',
                    {
                      selected: selectedGood === good,
                    },
                  )}
                >
                  {good}
                </li>

                <button
                  type="button"
                  onClick={() => this.clickHandler(good)}
                >
                  {buttonSelect}
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
