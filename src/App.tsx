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
            <li className={
              item === this.state.good
                ? 'goods__list goods__selected'
                : 'goods__list'
            }
            >
              {`${item}:`}
              <button
                className="button"
                type="button"
                hidden={this.state.good === item}
                onClick={() => {
                  this.setState({
                    good: item,
                    selectedGood: `${item} is selected`,
                  });
                }}
              >
                Select
              </button>
              <button
                className="button button__clear"
                type="button"
                hidden={this.state.good !== item}
                onClick={() => {
                  this.setState({
                    good: '',
                    selectedGood: 'No goods selected',
                  });
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
