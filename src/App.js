import classNames from 'classnames';
import React from 'react';
// import classNames from 'classnames';
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
  'Garlic',
];

class App extends React.Component {
  state = {
    selectedGoods: ['Jam'],
  };

  setTitle() {
    const goods = [...this.state.selectedGoods];
    const lastGood = goods[goods.length - 1];

    switch (goods.length) {
      case 1:
        return `${goods[0]} is selected`;
      case 0:
        return 'No goods selected';
      default:
        goods.length -= 1;

        return `${goods.join(', ')} and ${lastGood} are selected`;
    }
  }

  clickAdd= (good) => {
    this.setState(state => ({
      selectedGoods: [...state.selectedGoods, good],
    }));
  };

  clickRemove= (good) => {
    this.setState(state => ({
      selectedGoods: state.selectedGoods.filter(item => item !== good),
    }));
  };

  clickRemoveAll =() => {
    this.setState({ selectedGoods: [] });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="App__block">
          <h1 className="App__title">
            {this.setTitle()}
          </h1>
          <button
            type="button"
            onClick={this.clickRemoveAll}
            className={classNames('App__button', {
              hidden: selectedGoods.length === 0,
            })}
          >
            X
          </button>
        </div>
        <ul className="App__list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames('App__product', {
                'App__product--added': selectedGoods.includes(good),
              })}
            >
              {good}
              <button
                type="button"
                onClick={() => (
                  (selectedGoods.includes(good))
                    ? this.clickRemove(good)
                    : this.clickAdd(good)
                )}
                className={classNames('App__button', {
                  'App__button-green': !selectedGoods.includes(good),
                  'App__button-red': selectedGoods.includes(good),
                })}
              >
                {(selectedGoods.includes(good))
                  ? 'Remove'
                  : 'Add'
                }
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
