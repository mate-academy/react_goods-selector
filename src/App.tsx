import React from 'react';
import './App.scss';
import classNames from 'classnames';
import uniqid from 'uniqid';

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

const goodsWithId = goodsFromServer.map((good) => {
  return {
    name: good,
    id: uniqid(),
  };
});

interface State {
  selectedGoods: string[]
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  reset = () => (
    this.setState({ selectedGoods: [] })
  );

  addItem = (item: string) => {
    const { selectedGoods } = this.state;

    return this.setState({ selectedGoods: [...selectedGoods, item] });
  };

  removeItem = (item: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(item)) {
      const lastIndex = selectedGoods.lastIndexOf(item);

      selectedGoods.splice(lastIndex, 1);

      return this.setState({ selectedGoods: [...selectedGoods] });
    }

    return null;
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        {selectedGoods.length > 0
          ? (
            <>
              <h1>{`Selected goods: ${selectedGoods.join(', ')}`}</h1>
              <button
                className="button"
                type="button"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )
          : <h1>No goods selected</h1>}
        <ul className="list">
          {goodsWithId.map(good => {
            const { name, id } = good;

            return (
              <>
                <li
                  key={id}
                  className={classNames('list__item',
                    { 'list__item--selected': selectedGoods.includes(name) })}
                >
                  <h3>{name}</h3>
                  <button
                    className="button"
                    type="button"
                    onClick={() => this.addItem(name)}
                  >
                    Add
                  </button>
                  <button
                    className="button"
                    type="button"
                    onClick={() => this.removeItem(name)}
                    disabled={!selectedGoods.includes(name)}
                  >
                    Remove
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
