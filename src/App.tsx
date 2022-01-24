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
  selectedGoods: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: 'Jam',
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1>
          {selectedGoods}
          {' '}
          is Selected
        </h1>
        <button
          type="button"
          className={classNames({
            isVisible: selectedGoods === '',
          })}
          onClick={() => this.setState({
            selectedGoods: '',
          })}
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
                    isSelectedGood: selectedGoods === good,
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
                    isVisible: selectedGoods === good,
                  },
                )}
                onClick={() => this.setState({ selectedGoods: good })}
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
