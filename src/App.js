import React from 'react';
import './App.scss';

const goodsFromServer = [
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

class App extends React.Component {
  state = {
    activeElement: null,
    selectedGood: '-',
  };

  removeActiveClass = () => {
    const { activeElement } = this.state;

    if (activeElement) {
      activeElement.classList.remove('active');
    }
  };

  selectedGoodHandler = (e, good) => {
    this.removeActiveClass();

    e.target.classList.add('active');

    this.setState({
      activeElement: e.target,
      selectedGood: good,
    });
  };

  clearGoodsListHandler = () => {
    this.setState({
      selectedGood: '-',
    });

    this.removeActiveClass();
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <button
          onClick={this.clearGoodsListHandler}
          className="clear"
          type="button"
        >
          Clear
        </button>
        <h1>{`Selected good: ${selectedGood}`}</h1>

        {goodsFromServer.map(good => (
          <button
            key={good}
            onClick={e => this.selectedGoodHandler(e, good)}
            type="button"
            className="button"
          >
            {good}
          </button>
        ))}

      </div>
    );
  }
}

export default App;
