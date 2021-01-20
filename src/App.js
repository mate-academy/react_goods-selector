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
    selected: '-',
  }

  handler = (item) => {
    this.setState({ selected: item });
  }

  clearHandler = (item) => {
    this.setState({
      selected: '',
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {selected}
        </h1>
        <div>
          <button
            type="button"
            onClick={() => {
              this.clearHandler();
            }}
          >
            Clear
          </button>
          <ul>
            {goodsFromServer.map(item => (
              <li
                key={item}
                className={ClassNames(
                  'list__item',
                  { 'list__item--selected': selected === item },
                )}
              >
                {item}
                <button
                  type="button"
                  onClick={() => {
                    this.handler(item);
                  }}
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
