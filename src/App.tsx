import classNames from 'classnames';
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

type Prop = {
  selectedGood: string[];
};

class App extends React.Component<{}, Prop> {
  state = {
    // eslint-disable-next-line react/no-unused-state
    selectedGood: ['Jam'],
  };

  toggle = (good: string) => {
    if (this.state.selectedGood.includes(good)) {
      this.setState(state => (
        { selectedGood: [...state.selectedGood.filter(item => item !== good)] }
      ));
    } else {
      this.setState(state => (
        { selectedGood: [...state.selectedGood, good] }
      ));
    }
  };

  createTitle = (goods: string[]) => {
    return (
      goods.length
        ? (
          <p className="App__data-info">
            {goods.length > 1
              ? `${goods.slice(0, -1).join(', ')} and ${goods[goods.length - 1]} are `
              : `${goods[0]} is `}
            selected
          </p>
        ) : (<p className="App__data-info">No goods selected</p>)
    );
  };

  cancelSelected = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1>Selected good:</h1>
        {this.createTitle(selectedGood)}
        <ul className="App__list">
          <button
            type="button"
            className="App__btn-clear"
            onClick={() => {
              this.cancelSelected();
            }}
          >
            Cancel Selected
          </button>
          {goodsFromServer.map(good => {
            return (
              <li
                key={good}
                className={classNames(
                  'App__item',
                  { 'App__item--on': selectedGood.includes(good) },
                  { 'App__item--off': !selectedGood.includes(good) },
                )}
              >
                <p>{good}</p>
                <button
                  className="App__btn"
                  type="button"
                  onClick={() => {
                    this.toggle(good);
                  }}
                >
                  {selectedGood.includes(good) ? '-' : '+'}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
