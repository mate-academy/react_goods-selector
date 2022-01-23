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
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: 'Jam',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods is selected'}
        </h1>

        {selectedGood && (
          <button
            type="button"
            className="delete is-large"
            onClick={() => {
              this.setState({ selectedGood: '' });
            }}
          >
            {' '}
          </button>
        )}

        <ul>
          {goodsFromServer.map((product) => (
            <>
              <li key={product} className={classNames('box', { selected: selectedGood === product })}>
                {product}
              </li>

              <button
                type="button"
                className="button is-primary is-light"
                onClick={() => {
                  this.setState({ selectedGood: product });
                }}
              >
                Select
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
