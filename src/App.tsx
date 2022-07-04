import React from 'react';
import './App.scss';

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

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
    defaultStatus: 'No goods selected',
  };

  clear = () => {
    this.setState({ selectedGoods: '' });
  };

  select = (item: string) => {
    this.setState({ selectedGoods: item });
  };

  render() {
    const { selectedGoods, defaultStatus } = this.state;
    const hiddenButton = selectedGoods.length > 0
      ? null
      : 'App__button--hidden';
    const titleContent = selectedGoods.length > 0
      ? `${selectedGoods} is selected`
      : defaultStatus;

    return (
      <div className="App">
        <div className="App__container">
          <h1 className="App__title">
            {titleContent}
          </h1>
          <button
            type="button"
            className={`App__button ${hiddenButton}`}
            onClick={this.clear}
          >
            clear
          </button>
          <ul className="App__list">
            {goodsFromServer.map((good) => (
              <li
                key={good}
                className={`App__item ${selectedGoods.includes(good)
                  ? 'App__item--selected'
                  : null}`}
              >
                {good}
                <button
                  type="button"
                  className="App__button"
                  onClick={() => {
                    this.select(good);
                  }}
                >
                  {selectedGoods.includes(good) ? 'Remove' : 'Select '}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
