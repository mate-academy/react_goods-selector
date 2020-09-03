import React from 'react';
import classNames from 'classnames';
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
    selectedGoods: '',
  };

  selectedItem = (goods) => {
    this.setState({ selectedGoods: goods });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1 className="header__title">
            {'Selected good: - '}
            <span className="header__goods">
              {selectedGoods || 'goods not selected'}
            </span>
          </h1>
          <button
            onClick={() => this.setState({ selectedGoods: '' })}
            className="header__close"
            type="button"
          >
            X
          </button>
        </div>
        {goodsFromServer.length}
        <ul className="listOfGoods">
          {goodsFromServer.map(item => (
            <li>
              <button
                key={item}
                className={classNames({
                  listOfGoods__goods: true,
                  'listOfGoods__goods--active': selectedGoods === item,
                })}
                onClick={() => {
                  this.selectedItem(item);
                }}
                type="button"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
