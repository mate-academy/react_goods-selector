/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
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

type State = {
  addedGoods: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    addedGoods: ['Jam'],
  };

  render() {
    const array = this.state.addedGoods.join(', ');

    return (
      <div className="App p-4 d-flex">
        <div className="w-50">
          <ul className="list-group mb-3">
            {goodsFromServer.map(good => (
              <li
                key={good}
                className={this.state.addedGoods.includes(good)
                  ? (
                    'bg-primary '
                    + 'bg-gradient '
                    + 'd-flex '
                    + 'justify-content-between '
                    + 'me-3 '
                    + 'list-group-item '
                  )
                  : (
                    'd-flex '
                    + 'justify-content-between '
                    + 'me-3 '
                    + 'list-group-item '
                  )}
              >
                <div className="d-inline-block me-3">
                  {good}
                </div>
                <button
                  className={this.state.addedGoods.includes(good)
                    ? 'btn btn-warning btn-sm'
                    : 'btn btn-info btn-sm'}
                  type="button"
                  onClick={() => {
                    return (
                      this.state.addedGoods.includes(good)
                        ? this.setState((prevState) => {
                          const prev = prevState.addedGoods;
                          const index = prev.indexOf(good);

                          prev.splice(index, 1);

                          return { addedGoods: prev };
                        })
                        : this.setState((prevState) => {
                          const prev = prevState.addedGoods;

                          prev.push(good);

                          return { addedGoods: prev };
                        })
                    );
                  }}
                >
                  {this.state.addedGoods.includes(good)
                    ? 'Remove'
                    : 'Select'}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.setState({ addedGoods: [] })}
          >
            Clear
          </button>
        </div>

        <div className="w-50">
          <div className="fs-4 mb-3">Selected goods: {array}</div>
          <div
            className="mb-4"
          >
            Available options: {goodsFromServer.length}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
