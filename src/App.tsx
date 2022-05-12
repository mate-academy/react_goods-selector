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
    if (!this.state.selectedGoods.includes(el)) {
      this.setState((prevState) => ({
        selectedGoods: [...prevState.selectedGoods, el],
      }));
    }
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
        <div className="container">
          <h1 className="App__title">{this.showGoods()}</h1>
          <ul className="App__list">
            {
              goodsFromServer.map(el => (
                <li
                  key={el}
                  className={
                    classNames({ selected: selectedGoods.includes(el) })
                  }
                >
                  <div className="App__item">
                    { el }
                    <div className="App__button--wrapper">
                      {
                        selectedGoods.includes(el)
                          ? (
                            <button
                              type="button"
                              className="App__btn"
                              onClick={this.removeGoods(el)}
                            >
                              Remove
                            </button>
                          )
                          : (
                            <button
                              type="button"
                              className="App__btn"
                              onClick={this.addGoods(el)}
                            >
                              Select
                            </button>
                          )
                      }
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
          { selectedGoods.length
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
        </div>
      </div>
    );
  }
}

export default App;
