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
    selected: [],
  };

  handleSelect = (e, good) => {
    const { selected } = this.state;

    if (e.ctrlKey && !selected.includes(e.target.innerText)) {
      this.setState({
        selected: [...selected, good],
      });
    } else if (e.ctrlKey && selected.includes(e.target.innerText)) {
      this.setState(state => ({
        selected: [...state.selected]
          .filter(selectedGood => (selectedGood !== good)),
      }));
    } else {
      this.setState({
        selected: [good],
      });
    }
  }

  clearButton = () => {
    this.setState({
      selected: [],
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {selected.join(', ')}
          <button type="button" className="clear" onClick={this.clearButton}>
            {' '}
            X
          </button>
        </h1>
        <div className="select-list">
          <ul>
            {goodsFromServer.map(good => (
              <li>
                <button
                  type="button"
                  key={good}
                  style={{ cursor: 'pointer' }}
                  className={selected.includes(good) ? 'active' : ''}
                  onClick={event => this.handleSelect(event, good)}
                >
                  {good}
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
