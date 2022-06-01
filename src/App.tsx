import React from 'react';
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

class App extends React.Component {
  state = {
    select: 'Jam',
  };

  buttonValue = (value: string) => {
    if (this.state.select === value) {
      this.setState({ select: '' });
    } else {
      this.setState({ select: value });
    }
  };

  render() {
    const { select } = this.state;

    return (
      <div className="App content">
        <h1>
          { select === ''
            ? 'No goods selected'
            : `Selected good is ${select}`}
        </h1>
        <ul>
          {goodsFromServer.map(good => (
            <>
              <li
                className={select === good
                  ? 'button is-success list-item'
                  : 'list-item'}
              >
                <p className="list-item">
                  {good}
                </p>
                <button
                  type="button"
                  className={select === good
                    ? 'button is-danger is-primary is-outlined'
                    : 'button is-link is-outlined'}
                  onClick={() => this.buttonValue(good)}
                >
                  {select === good ? 'Remove' : 'Select' }
                </button>
              </li>

            </>
          ))}
        </ul>
        {select !== ''
        && (
          <button
            type="button"
            className="button is-warning"
            onClick={() => {
              this.setState({ select: '' });
            }}
          >
            Clear
          </button>
        )}

      </div>
    );
  }
}

export default App;
