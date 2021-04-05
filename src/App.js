import React from 'react';
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

export class App extends React.Component {
  state = {
    goods: [...goodsFromServer],
    selectedGood: 'Jam',
  }

  render() {
    const { goods, selectedGood } = this.state;

    return (
      <div className="App">
        {!selectedGood && (
          <div className="title-info">
            <h1 className="goods-title">
              No goods selected
            </h1>
          </div>
        )}
        {selectedGood && (
          <div className="title-info">
            <h1 className="goods-title">
              {selectedGood}
              {' '}
              is selected
            </h1>
            <button
              type="button"
              className="btn-clear"
              onClick={() => {
                this.setState({
                  selectedGood: null,
                });
              }}
            >
              +
            </button>
          </div>
        )}
        <ul className="goods-list">
          {goods.map(item => (
            <li
              key={item}
              className={
                item === selectedGood
                  ? 'goods-list__item  goods-list__item--active'
                  : 'goods-list__item'
              }
            >
              {item}
              <button
                type="button"
                className={
                  item === selectedGood
                    ? 'goods-list__button  goods-list__button--active'
                    : 'goods-list__button'
                }
                onClick={() => {
                  this.setState({
                    selectedGood: item,
                  });
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
