import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { SiAddthis } from 'react-icons/si';

import './App.scss';

interface Good {
  name: string;
  id: string;
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  name: good,
  id: uuidv4(),
}));

type State = {
  selectedGoods: string[];
};

class App extends React.PureComponent<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addSelectedGood = (good: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, good],
    }));
  };

  removeSelectedGood = (selectGood: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(good => selectGood !== good),
    }));
  };

  clearSelectedGood = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  formatHeading = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods[0]} is selected`;
      default:
        return `
        ${selectedGoods.slice(0, -1).join(', ')}
        and ${selectedGoods.at(-1)} are selected
      `;
    }
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {this.formatHeading()}
        </h1>

        <ul className="App__list">
          {goodsFromServer.map((good) => {
            const isSelectedGood = selectedGoods.includes(good.name);

            return (
              <li key={good.id} className="App__item">
                <p className={isSelectedGood
                  ? 'App__good App__good--active'
                  : 'App__good'}
                >
                  {good.name}
                </p>

                <button
                  type="button"
                  className="App__button"
                  onClick={this.addSelectedGood(good.name)}
                  disabled={isSelectedGood && true}
                >
                  {!isSelectedGood
                    ? <SiAddthis className="App__button-addIcon" />
                    : <FaCheck className="App__button-checkIcon" />}
                </button>

                <button
                  type="button"
                  className="App__button"
                  onClick={this.removeSelectedGood(good.name)}
                >
                  <FaTimes className="App__button-closeIcon" />
                </button>

              </li>
            );
          })}
        </ul>

        {!!selectedGoods.length && (
          <button
            type="button"
            className="App__clearButton"
            onClick={this.clearSelectedGood}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default App;
