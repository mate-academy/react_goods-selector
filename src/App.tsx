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
    selectedGood: '',
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -&nbsp;
          {selectedGood.length !== 0
            ? `${selectedGood} is selected  `
            : 'No goods selected  '}
            &nbsp;
          <button
            className="btn-cancel"
            type="button"
            onClick={() => this.setState({ selectedGood: '' })}
          >
            X
          </button>
        </h1>

        <ol className="goods">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="good"
            >
              <p className="good__name">
                {good}
              </p>
              <button
                type="button"
                className={classNames(
                  'good__btn',
                  {
                    checked: selectedGood === good,
                  },
                )}
                onClick={() => this.setState({
                  selectedGood: good,
                })}
              >
                Select
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
