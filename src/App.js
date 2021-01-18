import React from 'react';
import ClassNames from 'classnames';
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
    selectedItem: 'none',
  };

  selectionkHandler = (item) => {
    this.setState({ selectedItem: item });
  }

  clearHandler = () => {
    this.setState({ selectedItem: 'none' });
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <div className="App">
        <div className="header__title">
          <h1>
            Selected good:
            {' '}
            {selectedItem}
          </h1>
          {!(selectedItem === 'none') && (
            <button
              type="button"
              onClick={() => {
                this.clearHandler();
              }}
            >
              Clear selected
            </button>
          )}
        </div>
        <div>
          Goods available:
          {goodsFromServer.length}
        </div>
        <ul>
          {goodsFromServer.map(item => (
            <li
              key={item}
              className={ClassNames(
                'list__item',
                { 'list__item--selected': selectedItem === item },
              )}
            >
              <span>{item}</span>
              <button
                type="button"
                onClick={() => {
                  this.selectionkHandler(item);
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
