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
    name: '-',
  };

  selectHandler = (event) => {
    this.setState({ name: event.target.innerText });
  };

  cleanHandler = (event) => {
    this.setState({ name: '-' });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {`Selected good: ${name}`}
          {name !== '-' && (
            <button
              type="button"
              className={classNames('cleaner', 'cleaner--selected')}
              onClick={this.cleanHandler}
            >
              X
            </button>
          )}
        </h1>

        <div className="goods">
          {goodsFromServer.map(elem => (
            <button
              type="button"
              key={elem}
              className={classNames('select', {
                'select--selected': elem === name,
              })}
              onClick={this.selectHandler}
            >
              {elem}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
