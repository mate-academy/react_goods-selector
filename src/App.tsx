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
  good: string,
  selectedGood: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    good: `${goodsFromServer.find(x => x === 'Jam')}`,
    selectedGood: `${goodsFromServer.find(x => x === 'Jam')} is selected`,
  };

  clearGood = () => {
    this.setState({
      good: '',
      selectedGood: 'No goods selected',
    });
  };

  selectGood = (item: string) => {
    this.setState({
      good: item,
      selectedGood: `${item} is selected`,
    });
  };

  render() {
    return (

      <div className="App">
        <h1 className="tittle">
          {this.state.selectedGood}
          <button
            className="button button__clear"
            type="button"
            hidden={!this.state.good}
            onClick={this.clearGood}
          >
            Clear
          </button>
        </h1>
        <ul className="goods">
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={classNames(
                'goods__list',
                {
                  goods__selected: item === this.state.good,
                },
              )}
            >
              {item}
              <button
                className={classNames(
                  'button',
                  {
                    button__clear: this.state.good === item,
                  },
                )}
                type="button"
                onClick={() => {
                  if (this.state.good !== item) {
                    return this.selectGood(item);
                  }

                  return this.clearGood();
                }}
              >
                {this.state.good !== item ? 'Select' : 'Remove'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
