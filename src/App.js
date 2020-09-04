import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    choosenItem: '',
  };

  chooseItem = (event) => {
    this.setState({ choosenItem: event.target.innerText });
  };

  clearSelection = (event) => {
    this.setState({ choosenItem: '' });
  };

  render() {
    const { choosenItem } = this.state;

    return (
      <div className="App">
        <div className="App__header header">
          <h1>
            Selected good:
            {' '}
            {choosenItem || '-'}
          </h1>
          {choosenItem && (
            <button
              type="button"
              className="header__button"
              onClick={this.clearSelection}
            >
              X
            </button>
          )}
        </div>

        <div className="App__items items">
          {goodsFromServer.map(item => (
            <button
              type="button"
              className={classNames(
                'items__item',
                { items__item_selected: choosenItem === item },
              )}
              key={item}
              onClick={this.chooseItem}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
