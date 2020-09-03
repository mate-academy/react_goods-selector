import React from 'react';
import './App.scss';
import classNames from 'classnames';

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
    current: 'none',
  };

  selectHandler = (good) => {
    this.setState({
      current: good,
    });
  }

  resetHandler = () => {
    this.setState({
      current: 'none',
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {this.state.current}
        </h1>

        <button type="button" onClick={this.resetHandler}>Clear</button>

        <div>
          {goodsFromServer.map(good => (
            <button
              type="button"
              key={good}
              className={classNames({
                good: true,
                'good--selected': good === this.state.current,
              })}
              onClick={() => {
                this.selectHandler(good);
              }}
            >
              {good}
            </button>
          ))}
        </div>

        {`there are ${goodsFromServer.length} goods`}
      </div>
    );
  }
}

export default App;
