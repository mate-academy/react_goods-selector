/* eslint-disable no-mixed-operators */
/* eslint-disable no-param-reassign */
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
    select: null,
  }

  componentDidMount() {
    const liArr = document.querySelectorAll('li');

    liArr.forEach((item) => {
      if (item.innerText === 'JamSelect') {
        item.setAttribute('selected', '');
        item.lastChild.style.visibility = 'hidden';
        this.setState({ select: 'Jam' });
      }
    });
  }

  componentDidUpdate() {
    const liArr = document.querySelectorAll('li');

    liArr.forEach((item) => {
      if (item.innerText !== this.state.select) {
        item.removeAttribute('selected');
        item.lastChild.style.visibility = '';
      }
    });
  }

  select = (event, good) => {
    this.setState({ select: good });
    event.target.style.visibility = 'hidden';
    event.target.parentNode.setAttribute('selected', '');
  };

  reset = () => {
    this.setState({ select: null });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              {good}
              <button
                type="button"
                onClick={(event) => {
                  this.select(event, good);
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            this.reset();
          }}
        >
          Reset
        </button>
        <h1>
          Selected good:
          {this.state.select && this.state.select || 'no selected'}
        </h1>
      </div>
    );
  }
}

export default App;
