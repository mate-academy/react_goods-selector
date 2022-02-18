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
  addGoods:string[]
  dataGoods: string[]
};

class App extends React.Component<{}, State> {
  state: State = {
    addGoods: ['Jam'],
    dataGoods: goodsFromServer,
  };

  create = (good: string) => {
    this.setState((state) => (
      { addGoods: [...state.addGoods, good] }
    ));
  };

  deleteGoods = () => {
    this.setState(() => (
      { addGoods: [] }
    ));
  };

  deleteGood = (good: string) => {
    this.setState(({ addGoods }) => ({
      addGoods: addGoods.filter(item => item !== good),
    }));
  };

  render() {
    const { addGoods, dataGoods } = this.state;

    return (
      <div className="App">
        <div className="check_goods">
          <h1>
            {(addGoods.length === 0)
              ? 'No selected goods'
              : `${addGoods}`
              + ' is selected' }
          </h1>
          <button
            onClick={this.deleteGoods}
            type="button"
            className="button button_delete"
          >
            Delete goods
          </button>
        </div>

        {dataGoods.map((good) => {
          const isSelected = addGoods.includes(good);
          const buttonText = isSelected
            ? 'Delete'
            : 'Add';

          return (
            <div
              className={classNames('container__item',
                { 'container__item--active': addGoods.includes(good) })}
            >
              <li
                key={good}
                className="container__item_good"
              >
                {good}
              </li>
              <button
                onClick={() => (
                  isSelected
                    ? this.deleteGood(good)
                    : this.create(good)
                )}
                className="container__item_button button"
                type="button"
              >
                {buttonText}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
