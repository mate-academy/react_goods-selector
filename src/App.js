import React from 'react';
import './App.scss';
import ClassNames from 'classnames';

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
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectedOpt: 1,
    isOptionSelected: false,
    selectedGoods: [],
    startButton: true,
    sortBy: '',
    modified: false,
    isReversed: false,
  }

  select = (event) => {
    this.setState({
      selectedOpt: event.target.value,
      isOptionSelected: true,
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
      modified: true,
    });
  }

  sortByLetter = () => {
    this.setState({
      sortBy: 'letter',
      modified: true,
    });
  }

  reset = () => {
    this.setState({
      modified: false,
      isOptionSelected: false,
      selectedOpt: 1,
    });
  }

  reverse = () => {
    this.setState(prevState => ({
      modified: true,
      isReversed: !prevState.isReversed,
    }));
  }

  start = () => {
    this.setState(prevState => ({ startButton: !prevState.startButton }));
  }

  clearAll = () => {
    this.setState({ selectedGoods: [] });
  }

  addSelected = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  }

  removeSelected = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(item => item !== good),
    }));
  };

  render() {
    const { isReversed,
      options,
      selectedOpt,
      modified,
      sortBy,
      startButton,
      allGoods,
      selectedGoods,
      isOptionSelected } = this.state;

    let goodsOnPage = [...allGoods];

    if (selectedOpt > 1 && isOptionSelected) {
      goodsOnPage = goodsOnPage.filter(good => good.length >= selectedOpt);
    }

    goodsOnPage.sort((one, two) => {
      switch (sortBy) {
        case ('length'):
          return one.length - two.length;

        case ('letter'):
          return one.localeCompare(two);

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsOnPage.reverse();
    }

    if (!modified) {
      goodsOnPage = [...allGoods];
    }

    const page = (
      <div className="App">
        <h1 className="App__header">
          Selected goods:
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
        {selectedGoods.length !== 0 && (
          <button
            type="button"
            className="App__clear-button"
            onClick={this.clearAll}
          >
            Clear all
          </button>
        )}
        <ul className="App__list">
          {goodsOnPage.map(good => (
            <li
              className={ClassNames('App__list-item',
                { 'App__list-item--active': selectedGoods.includes(good) })}
              key={good}
            >
              {good}
              <button
                className="App__list-item-button"
                type="button"
                onClick={() => (selectedGoods.includes(good)
                  ? this.removeSelected(good)
                  : this.addSelected(good))}
              >
                Select / Remove
              </button>

            </li>
          ))}
        </ul>
        <div className="App__buttons">
          <button
            type="button"
            onClick={this.reverse}
            className="App__reverse"
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortByLetter}
            className="App__sort-alph"
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.reset}
            className="App__reset"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
            className="App__sort-length"
          >
            Sort by length
          </button>
          <select value={selectedOpt} onChange={this.select}>
            {options.map(opt => <option value={opt} key={opt}>{opt}</option>)}
          </select>
        </div>
      </div>
    );

    const button = (
      <button
        className="App__start"
        type="button"
        onClick={this.start}
      >
        Start
      </button>
    );

    return startButton
      ? button
      : page;
  }
}

export default App;
