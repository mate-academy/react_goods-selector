import React from 'react';
import './App.scss';
import 'bulma/css/bulma.css';
import className from 'classnames';

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
    selected: 'Jam',
  };

  render() {
    return (
      <div className="App column">
        <h1 className={
          className('content', 'is-large', 'title')
        }
        >
          <strong>
            {this.state.selected ? `Selected good: - ${this.state.selected}` : 'No good selected'}
          </strong>
        </h1>
        <ul className="menu_list content">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={
                className(
                  'menu_list-item',
                  { selected: this.state.selected === good },
                )
              }
            >
              <p className={
                className(
                  'menu_list-text',
                  { bordered: this.state.selected === good },
                )
              }
              >
                {good}
              </p>
              <button
                type="button"
                onClick={() => this.setState({ selected: good })}
                className={
                  className(
                    'button',
                    'is-rounded',
                    'is-primary',
                    'is-small',
                    { 'is-invisible': this.state.selected === good },
                  )
                }
              >
                Select
              </button>
              <button
                type="button"
                onClick={() => this.setState({ selected: null })}
                className={
                  className(
                    'button',
                    'is-danger',
                    'is-rounded',
                    'is-small',
                    { 'is-invisible': this.state.selected !== good },
                  )
                }
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
