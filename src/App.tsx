import React from 'react';
import classNames from 'classnames';
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

type State = {
  selectedGoods: string[],
};

class App extends React.Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  addGood = (addGood: string) => {
    this.setState((state) => ({
      selectedGoods: [...state.selectedGoods, addGood],
    }));
  };

  removeGood = (removeGood: string) => {
    this.setState((state) => ({
      selectedGoods: state.selectedGoods.filter((good) => good !== removeGood),
    }));
  };

  clearGoods = () => {
    this.setState({
      selectedGoods: [],
    });
  };

  itemsTitle = () => {
    let result = '';

    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        result = 'No goods selected';
        break;

      case 1:
        result = `${selectedGoods[0]} is selected`;
        break;

      default:
        result = `${selectedGoods.slice(0, selectedGoods.length - 1).join(', ')} and `
          + `${selectedGoods.slice(-1)} are selected`;
        break;
    }

    return result;
  };

  render() {
    const title = this.itemsTitle();
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {title}
        </h1>

        <button
          type="button"
          className={classNames('button button__clear', { button__hidden: selectedGoods.length === 0 })}
          onClick={() => {
            this.clearGoods();
          }}
        >
          Clear products
        </button>

        <ul className="goods">
          {
            goodsFromServer.map((good) => {
              const selected = this.state.selectedGoods.includes(good);

              return (
                <li className="goods__item" key={good}>
                  <h2 className="goods__title">
                    {good}
                  </h2>

                  {
                    selected
                      ? (
                        <button
                          type="button"
                          className="button"
                          onClick={() => {
                            this.removeGood(good);
                          }}
                        >
                          Remove good
                        </button>
                      )
                      : (
                        <button
                          type="button"
                          className="button"
                          onClick={() => {
                            this.addGood(good);
                          }}
                        >
                          Add good
                        </button>
                      )
                  }
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
