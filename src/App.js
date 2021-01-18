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
    goods: [...goodsFromServer],
    currentTarget: [],
  }

toggleHandler = (good) => {
  const copy = [...this.state.currentTarget];

  if (!copy.includes(good)) {
    this.setState({ currentTarget: [...copy, good] });
  }
}

removeItem = (good) => {
  this.setState((prevState) => {
    if (prevState.currentTarget.includes(good)) {
      prevState.currentTarget
        .splice(prevState.currentTarget
          .indexOf(good), 1);
    }

    return {
      prevState: prevState.currentTarget,
    };
  });
}

clean = () => {
  this.setState({ currentTarget: [] });
}

render() {
  const { goods, currentTarget } = this.state;

  return (
    <div className="App">
      <h1>
        Selected good: -
        {currentTarget.join(', ')}
      </h1>
      <button
        type="button"
        onClick={() => this.clean()}
      >
        clean table
      </button>
      <ul>
        {goods.map(good => (
          <li
            className={currentTarget.includes(good)
              ? 'seclected'
              : ''
            }
            key={Math.random()}
          >
            {good}
            <button
              type="button"
              onClick={() => {
                this.toggleHandler(good);
              }}
            >
              Add
            </button>

            <button
              type="button"
              className={currentTarget.includes(good) && ''}
              onClick={() => {
                this.removeItem(good);
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
}

export default App;
