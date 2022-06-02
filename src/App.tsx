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

type State = {
  selectedGood: string,
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">{this.state.selectedGood.length > 1 ? `${this.state.selectedGood} is selected` : 'No goods selected'}</h1>
        <button
          type="button"
          className={`App__clearButton button is-light ${this.state.selectedGood === '' ? 'App__clearButton--hide is-hidden' : ''}`}
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
                className={`App__list-item ${this.state.selectedGood === product ? 'App__list-item--selected' : ''}`}
              >
                {product}
              </li>
              <button
                type="button"
                id={product}
                key={product + 2}
                className={`App__button button is-light ${this.state.selectedGood === product ? 'App__button--selected is-hidden' : ''}`}
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
                className={`button is-light App__remove-button ${this.state.selectedGood === product ? 'App__remove-button--active' : 'is-hidden'}`}
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
