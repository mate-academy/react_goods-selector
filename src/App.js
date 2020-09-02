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
    selectedGood: '',
  }

  addSelection = (event, good) => {
    if (!event.ctrlKey) {
      this.setState({ selectedGood: good });

      return;
    }

    event.stopPropagation();

    if (this.state.selectedGood.includes(good)) {
      this.setState(state => (
        { selectedGood: state.selectedGood
          .replace(`, ${good}`, '')
          .replace(`${good},`, '') }
      ));

      return;
    }

    this.setState(state => (
      { selectedGood: `${state.selectedGood
        || good}${state.selectedGood && `, ${good}`}` }
    ));
  }

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          <span className="App__selected-good">
            {selectedGood}
          </span>
          {' '}
          <button
            type="button"
            className={
              selectedGood
                ? 'App__button App__button--close'
                : 'App__button App__button--close hidden'
            }
            onClick={() => this.setState({ selectedGood: '' })}
          >
            {' '}
          </button>
        </h1>

        <p>
          All goods:
          {' '}
          {goodsFromServer.length}
        </p>

        <ul className="App__list">
          {goodsFromServer.map((good, id) => (
            <li id={id}>
              <button
                className={
                  selectedGood.includes(good)
                    ? 'App__button App__button--selected'
                    : 'App__button'
                }
                type="button"
                onClick={event => this.addSelection(event, good)}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
