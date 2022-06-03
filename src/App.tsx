/* eslint-disable no-console */
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
  selectedGoods: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: [],
  };

  clickHandler = (good: string) => {
    if (this.state.selectedGoods.find(item => item === good)) {
      this.setState(prevState => ({
        selectedGoods: prevState.selectedGoods.filter(item => item !== good),
      }));
    } else {
      this.setState(prevState => ({
        selectedGoods: [...prevState.selectedGoods, good],
      }));
    }
  };

  headerChanger = () => {
    const { selectedGoods } = this.state;

    switch (true) {
      case selectedGoods.length === 0:
        return 'No goods selected';

      case selectedGoods.length === 1:
        return `${selectedGoods[0]} is selected`;

      case selectedGoods.length === 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;

      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods.slice(-1)} are selected`;
    }
  };

  clearSelected = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">
          {this.headerChanger()}
        </h1>

        <div className="App__underheader">
          <p className="App__underheader--text">
            {"Goods' list length: "}
            {goodsFromServer.length}
            <br />
            {'Selected: '}
            {selectedGoods.length}
          </p>
          &emsp;

          {selectedGoods.length > 0
            && (
              <button
                type="button"
                className="button button-active"
                onClick={this.clearSelected}
              >
                Clear
              </button>
            )}
        </div>

        <ul className="App__list">
          {goodsFromServer.map((good) => (
            <li key={good} className="listItem">
              <span className="listItem__good">{good}</span>
              &emsp;
              <button
                type="button"
                className={classNames('button', {
                  // eslint-disable-next-line max-len
                  'button-active': selectedGoods.find(
                    (item) => item === good,
                  ),
                })}
                onClick={() => {
                  this.clickHandler(good);
                }}
              >
                {selectedGoods.find((item) => item === good)
                  ? 'Remove'
                  : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
