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

const goods = goodsFromServer.map((good, index) => ({
  name: good,
  id: index,
}));

class App extends React.Component {
  state = {
    selectedGood: '',
  }

  selectGood = (good) => {
    this.setState({ selectedGood: good });
  }

  clearSelectedGood = () => {
    this.setState({ selectedGood: '' });
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__heading">{`Selected good: - ${selectedGood}`}</h1>
        <button
          type="button"
          className="App__btn "
          onClick={this.clearSelectedGood}
        >
          X
        </button>
        <ol className="App__list list">
          {
            goods.map(({ name, id }) => (
              <li
                className={`
                  list__item ${selectedGood === name ? 'selected' : ''}
                `}
                key={id}
              >
                {name}
                <button
                  type="button"
                  className="list__btn"
                  onClick={() => this.selectGood(name)}
                >
                  Select
                </button>
              </li>
            ))
          }
        </ol>
      </div>
    );
  }
}

export default App;
