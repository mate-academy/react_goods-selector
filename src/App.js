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
    select: '',
  }

handleClick = (product) => {
  this.setState({ select: product });
}

render() {
  return (
    <div className="App">
      <h1>
        Selected good:
        {' '}
        {this.state.select}
      </h1>
      {this.state.select.length > 0 && (
        <button type="button" onClick={() => this.setState({ select: 'none' })}>
          clear
        </button>
      )}

      <ul className="list-group">
        {goodsFromServer.map(product => (
          <ul>
            <li
              className={this.state.select === product && 'list-group-item'}
              key={product}
            >
              {product}
            </li>
            <button
              type="button"
              onClick={() => this.handleClick(product)}
            >
              select
            </button>
          </ul>
        ))}
      </ul>
    </div>
  );
}
}

export default App;
