import React from 'react';
import './App.scss';
import './active.scss';
import './goods-list.scss';
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

class App extends React.Component {
  state = {
    selectedGood: 'Jam',
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {this.state.selectedGood
            ? `${this.state.selectedGood} is selected`
            : 'No goods selected'}
          {this.state.selectedGood && (
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGood: '' });
              }}
              className="App__title-cancel-button"
            >
              X
            </button>
          )}
        </h1>

        <ul className="goods-list">
          {goodsFromServer.map(product => (
            <li
              className={
                classNames(
                  'goods-list__list-item',
                  { active: product === this.state.selectedGood },
                )
              }
              key={product}
            >
              {product}

              {this.state.selectedGood !== product && (
                <button
                  type="button"
                  className={
                    classNames(
                      'goods-list__select-button',
                      { active: product === this.state.selectedGood },
                    )
                  }
                  onClick={() => {
                    this.setState({ selectedGood: product });
                  }}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
