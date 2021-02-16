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
    selectedGood: 'Jam',
    visibleBtn: 'hide',
  }

  componentDidMount() {
    this.setState({ selectedGood: null });
  }

  onSelected = (name) => {
    this.setState({
      selectedGood: name,
      visibleBtn: 'visible',
    });
  }

  render() {
    const { selectedGood, visibleBtn } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selectedGood === null
            ? 'No goods selected'
            : `${selectedGood} is selected`}
        </h1>
        <button
          className={visibleBtn}
          type="button"
          onClick={() => this.setState({ selectedGood: null })}
        >
          Clear selected
        </button>
        <ul className="list">

          {goodsFromServer.map(good => (
            <div className="listElement">
              <li
                key={good}
                className={selectedGood === good ? 'selected' : ''}
              >
                {good}
              </li>
              <button
                disabled={selectedGood === good}
                onClick={() => this.onSelected(good)}
                type="button"
              >
                Select
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
