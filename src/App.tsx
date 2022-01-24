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
    selectedGood: '',
  };

  componentDidMount() {
    this.setState({
      selectedGood: 'Jam',
    });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="goods-string">
          {selectedGood
            ? `${selectedGood} is selected`
            : 'No goods selected'}
        </h1>

        <button
          type="button"
          className="delete-button"
          onClick={() => this.setState({ selectedGood: '' })}
        >
          X
        </button>

        <ul className="goods-list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className="goods-list__item"
            >
              <div
                className={classNames('good', { selected: good === selectedGood })}
              >
                {good}
              </div>
              {selectedGood !== good && (
                <button
                  type="button"
                  className="select-good-button"
                  onClick={() => {
                    this.setState({ selectedGood: good });
                  }}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
