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
    allGoods: goodsFromServer,
    selectedGoods: [],
  }

  toggleClass = (e) => {
    const listItem = e.target.parentNode;

    listItem.classList.toggle('App__list-item--active');
  }

  clearAll = () => {
    // eslint-disable-next-line
    const selectedElements = [...document.querySelectorAll('.App__list-item--active')];

    // eslint-disable-next-line
    selectedElements.map(element => element.classList.toggle('App__list-item--active'));

    this.setState({
      selectedGoods: [],
    });
  }

  addSelected = (e, good) => {
    this.toggleClass(e);

    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  }

  removeSelected = (e, good) => {
    this.toggleClass(e);
    // eslint-disable-next-line
    const newState = [...this.state.selectedGoods];

    newState.splice(newState.indexOf(good), 1);

    this.setState({
      selectedGoods: newState,
    });
  }

  render() {
    const { allGoods, selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">
          Selected good:
          {' '}
          {selectedGoods.length}
        </h1>

        {selectedGoods.map(good => (
          <span
            key={good}
            className="App__selected"
          >
            {`${good}, `}
          </span>
        ))}
        <br />
        <button
          type="button"
          className="App__clear-button"
          onClick={this.clearAll}
        >
          Clear all
        </button>

        <ul className="App__list">
          {allGoods.map(good => (
            <li
              className="App__list-item"
              key={good}
            >
              {good}

              <button
                className="App__list-item-button"
                type="button"
                onClick={e => (selectedGoods.includes(good)
                  ? this.removeSelected(e, good)
                  : this.addSelected(e, good))}
              >

                Select / Remove
              </button>

            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default App;
