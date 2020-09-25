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
    goodName: [' - '],
    array: [],
  };

  clearButton = () => {
    this.setState({ goodName: [' - '] });
    this.setState({ array: [] });
  };

  selectButton = (event, good, goodName, array) => {
    let arr;

    if (event.ctrlKey) {
      arr = array;

      if (arr.includes(good)) {
        const index = arr.indexOf(good);

        arr.splice(index, 1);
        this.setState({ goodName: arr.join(', ') });

        return null;
      }

      arr.push(good);
      this.setState({ goodName: arr.join(', ') });

      return null;
    }

    arr = [good];
    this.setState({
      array: arr,
      goodName: arr,
    });

    return null;
  };

  render() {
    const { goodName, array } = this.state;

    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {goodName}
        </h1>
        <button
          type="button"
          onClick={this.clearButton}
        >
          X
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good}>
              <button
                type="button"
                className={goodName.includes(good) ? 'selected-item' : null}
                onClick={(event) => {
                  this.selectButton(event, good, goodName, array);
                }}
              >
                {good}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
