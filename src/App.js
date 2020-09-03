import React from 'react';
import classNames from 'classnames';
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

  addSelection = (event, item) => {
    const { selectedGood } = this.state;

    if (!event.ctrlKey) {
      this.setState({ selectedGood: item });

      return;
    }

    if (selectedGood.includes(item)) {
      this.removeSelection(item);

      return;
    }

    this.setState(state => (
      { selectedGood:
          `${state.selectedGood || item}${state.selectedGood && `, ${item}`}` }
    ));
  }

  removeSelection = (good) => {
    this.setState(state => (
      { selectedGood: state.selectedGood
        .replace(`, ${good}`, '')
        .replace(`${good},`, '') }
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
            hidden={!selectedGood}
            className="App__button App__button--close"
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
          {goodsFromServer.map(item => (
            <li key={item}>
              <button
                className={classNames('App__button', {
                  'App__button--selected': selectedGood.includes(item),
                })}
                type="button"
                onClick={event => this.addSelection(event, item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
