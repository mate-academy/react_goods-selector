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

type Props = {};

type State = {
  selectedGood: string;
};

class App extends React.Component<Props, State> {
  state = {
    selectedGood: 'Jam',
  };

  clickHandler = (good: string) => {
    this.setState({
      selectedGood: good,
    });
  };

  clickClear = () => {
    this.setState({
      selectedGood: '',
    });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          {' '}
          <button type="button" onClick={this.clickClear}>
            X
          </button>
        </h1>

        <ul>
          {goodsFromServer.map(good => (
            <div className="list">
              <li
                key={good}
                className={classNames('good', {
                  good__selected: good === selectedGood,
                })}
              >
                {good}
              </li>
              <button
                type="button"
                onClick={() => {
                  this.clickHandler(good);
                }}
                className={classNames({
                  button_none: good === selectedGood,
                })}
              >
                Selected
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
