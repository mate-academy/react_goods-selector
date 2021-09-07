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

export class App extends React.Component {
  state = {
    selected: 'Jam',
  };

  render() {
    return (
      <div>
        <h1 className="select">
          Selected good:
          {' '}
          { this.state.selected ? this.state.selected : 'No goods selected'}
        </h1>
        <button
          type="button"
          className={classNames('select__button', this.state.selected ? 'show' : 'hidden')}
          onClick={() => this.setState({ selected: 0 })}
        >
          X
        </button>
        <ul className="goods__list">
          {goodsFromServer.map(good => (
            <li
              key={goodsFromServer.indexOf(good)}
              id={good}
              className="goods__li"
            >
              <label htmlFor={good.toLowerCase()} className={classNames('goods__label', this.state.selected === good ? 'active' : '')}>
                {good}
              </label>
              <button
                type="button"
                className="button"
                onClick={() => this.setState({ selected: good })}
                id={good.toLowerCase()}
              >
                .
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
