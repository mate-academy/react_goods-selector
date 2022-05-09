import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
  selectedGoods: string[];
};

class App extends React.Component <{}, State> {
  state = {
    selectedGoods: [] as string[],
  };

  showGoods = () => {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';
      case 1:
        return `${selectedGoods} is selected`;
      case 2:
        return `${selectedGoods[0]} and ${selectedGoods[1]} are selected`;
      default:
        return `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  };

  addGoods = (el: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: [...prevState.selectedGoods, el],
    }));
  };

  removeGoods = (el: string) => () => {
    this.setState((prevState) => ({
      selectedGoods: prevState.selectedGoods.filter(i => i !== el),
    }));
  };

  clearGoods = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">{this.showGoods()}</h1>
        {selectedGoods.length
          ? (
            <button
              type="button"
              onClick={this.clearGoods}
              className="App__clear--button"
            >
              Clear
            </button>
          )
          : null}
        <ul>
          {
            goodsFromServer.map(el => (
              <li
                key={el}
                className={
                  classNames({ selected: selectedGoods.includes(el) })
                }
              >
                { el }
                <div className="App__button--wrapper">
                  <button type="button" onClick={this.addGoods(el)}>
                    Select
                  </button>
                  <button type="button" onClick={this.removeGoods(el)}>
                    Remove
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
