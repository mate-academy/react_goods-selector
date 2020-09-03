import React from 'react';
import classNames from 'classnames';
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

  selectHandler = (event) => {
    this.setState({
      selected: event.target.innerText,
    });
  }

  clearHandler = () => {
    this.setState({
      selected: '-',
    });
  };

  render() {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1 className="heading">
          {`Selected good: ${this.state.selected}`}
        </h1>
        <button
          type="button"
          className={classNames('button',
            {
              'button--clear': selected !== '-',
              'button--hidden': selected === '-',
            })}
          onClick={this.clearHandler}
        >
          X
        </button>
        <div className="goods">
          {goodsFromServer.map(good => (
            <button
              type="button"
              key={good}
              className={classNames('button', {
                'button--selected': good === this.state.selected,
              })}
              onClick={this.selectHandler}
            >
              {good}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
