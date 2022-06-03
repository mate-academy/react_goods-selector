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

  render() {
    const { selectedGood } = this.state;
    // const classNames = require('classnames');

    return (
      <div className="App">
        <h1 className="App__title">
          {
            selectedGood.length > 1
              ? `${this.state.selectedGood} is selected`
              : 'No goods selected'
          }
        </h1>
        <button
          type="button"
          className={classNames(
            'App__clearButton button is-light',
            { 'App__clearButton--hide is-hidden': selectedGood === '' },
          )}
          onClick={() => {
            this.setState({ selectedGood: '' });
          }}
        >
          Clear
        </button>
        <ul className="App__list">
          {goodsFromServer.map((product) => (
            <div key={product}>
              <li
                className={classNames(
                  'App__list-item',
                  { 'App__list-item--selected': selectedGood === product },
                )}
              >
                {product}
              </li>
              <button
                type="button"
                id={product}
                key={product + 2}
                className={classNames(
                  'App__button button is-light',
                  {
                    'App__button--selected is-hidden': selectedGood === product,
                  },
                )}
                onClick={(event) => {
                  this.setState(
                    {
                      selectedGood: event.currentTarget.id,
                    },
                  );
                }}
              >
                Select
              </button>
              <button
                type="button"
                className={classNames(
                  'App__remove-button button is-light',
                  {
                    'App__remove-button--active': selectedGood === product,
                    'is-hidden': !(selectedGood === product),
                  },
                )}
                onClick={() => {
                  this.setState(
                    {
                      selectedGood: '',
                    },
                  );
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
