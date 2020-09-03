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

class App extends React.Component {
  state = {
    selector: false,
    close: false,
  };

  closeButton = (text) => {
    this.setState({ selector: false });
    this.setState({ close: false });
    document.querySelector('.App__list--active').className = 'App__list';
  }

  writeSrelector = (event, value) => {
    this.setState({ selector: value });
    this.setState({ close: true });
    const key = event.target;

    const active = document.querySelector('.App__list--active');

    if (active !== null) {
      active.className = 'App__list';
    }

    key.className = 'App__list App__list--active';
  }

  render() {
    const { selector, close } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          { selector }
          <span>
            <button
              type="button"
              className={close && 'App__close'}
              onClick={this.closeButton}
            >
              {close}
            </button>
          </span>
        </h1>
        {goodsFromServer.map(a => (
          <p>
            <button
              type="button"
              className="App__list"
              onClick={(event) => {
                this.writeSrelector(event, a);
              }}
            >
              {a}
            </button>
          </p>
        ))}
      </div>
    );
  }
}

export default App;
