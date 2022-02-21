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

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  selectGood(good: string) {
    this.setState({ selectedGood: good });
  }

  removeGood() {
    this.setState({ selectedGood: '' });
  }

  render() {
    const { selectedGood } = this.state;
    const visible = selectedGood === '';

    return (
      <div className="App">
        <h1>
          {!visible
          && (
            <button
              type="button"
              onClick={() => {
                this.removeGood();
              }}
            >
              X
            </button>
          )}

          {(!selectedGood)
            ? 'No goods selected'
            : `${selectedGood} is selected`}
        </h1>
        <div className="container">
          <ul className="container__list">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={
                  classNames('container__item', {
                    'container__item--selected': good === selectedGood,
                  })
                }
              >
                {good}

                {(good !== selectedGood)
                && (
                  <button
                    className="waves-effect waves-light btn"
                    type="button"
                    onClick={() => {
                      this.selectGood(good);
                    }}
                  >
                    Select
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
