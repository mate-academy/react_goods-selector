import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
  'Ham',
  'Chicke',
  'Milk',
  'Tomatoes',
].map(good => ({
  id: uuidv4(),
  good,
}));

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  }

  titleUpdate = () => {
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 0) {
      return 'Select goods from list below: ';
    }

    return `Selected: ${selectedGoods.length} goods`;
  }

  selectGoods = (good) => {
    this.setState(prevState => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  }

  removeGoods = (good) => {
    this.setState(prevState => ({
      selectedGoods: prevState.selectedGoods.filter(
        selectedGood => selectedGood !== good,
      ),
    }));
  }

  resetSelection = () => this.setState({ selectedGoods: [] });

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.titleUpdate()}
        </h1>
        <ul className="list">
          {goodsFromServer.map(({ good, id }, index) => (
            <li
              key={id}
              className="list__item"
            >
              <div className="list__item-name">
                {index + 1}
                {'. '}
                {good}
              </div>
              <button
                type="button"
                className={classNames('list__item-button', {
                  'list__item-button--active': selectedGoods
                    .includes(good),
                })}
                onClick={() => (
                  selectedGoods.includes(good)
                    ? this.removeGoods(good)
                    : this.selectGoods(good)
                )}
              />
            </li>
          ))}
        </ul>
        <div className="App__reset">
          <button
            type="button"
            className="App__reset-button"
            onClick={this.resetSelection}
          >
            Clear all
          </button>
        </div>
      </div>
    );
  }
}

export default App;
