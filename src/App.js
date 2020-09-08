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

  selectHandler = (product) => {
    this.setState({ name: product });
  };

  cleanHandler = () => {
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
          {goodsFromServer.map(product => (
            <button
              type="button"
              key={product}
              className={classNames('select', {
                'select--selected': product === name,
              })}
              onClick={(event) => {
                this.selectHandler(product);
              }}
            >
              {product}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
