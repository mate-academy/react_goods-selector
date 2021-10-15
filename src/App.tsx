import React from 'react';
import className from 'classnames';
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
  selected: string | null,
};

export default class App extends React.Component<{}, State> {
  state = {
    selected: goodsFromServer[8],
  };

  render() {
    return (
      <div className="App">
        <h1>
          {this.state.selected
            ? (`${this.state.selected} is selected`)
            : ('No goods selected')}
          {this.state.selected && (
            <button
              className="closer"
              type="button"
              onClick={() => this.setState({ selected: null })}
            >
              X
            </button>
          )}
        </h1>
        <ul className="goods">
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={className('goods__list__good', { 'goods__list__good--selected': this.state.selected === good })}
              >
                <p>
                  {good}
                </p>
                <button
                  className="goods__clicker"
                  type="button"
                  disabled={this.state.selected === good}
                  onClick={() => this.setState({ selected: good })}
                >
                  Select
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}
