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
    const { selectedGoods } = this.state;

    if (selectedGoods.length === 1) {
      return `${selectedGoods[0]} is selected`;
    }

    if (selectedGoods.length > 1) {
      return `${selectedGoods.join(', ')} are selected`;
    }

    return 'No goods selected';
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
              active: selectedGoods.length > 0,
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
                onClick={() => this.clickAdd(good)}
                className={classNames('App__button', 'App__button-green', {
                  active: !selectedGoods.includes(good),
                })}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => this.clickRemove(good)}
                className={classNames('App__button', 'App__button-red', {
                  active: selectedGoods.includes(good),
                })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
