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

  clearSelectedGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGood}
          {' '}
          is Selected
        </h1>
        <button
          type="button"
          className={classNames({
            isVisible: selectedGood === '',
          })}
          onClick={this.clearSelectedGood}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map((good) => (
            <li key={good}>
              <span
                className={classNames(
                  'good',
                  {
                    isSelectedGood: selectedGood === good,
                  },
                )}
              >
                {good}
              </span>
              <button
                type="button"
                className={classNames(
                  'good',
                  {
                    isVisible: selectedGood === good,
                  },
                )}
                onClick={() => this.setState({ selectedGood: good })}
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

export default App;
