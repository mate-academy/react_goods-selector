import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
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
  selectedGoods: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: 'Jam',
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        {selectedGoods ? (
          <h1 className="title">
            <span>
              {`${selectedGoods} is selected`}
            </span>
            <button
              type="button"
              className="removeButton"
              onClick={() => {
                this.setState({ selectedGoods: '' });
              }}
            >
              X
            </button>
          </h1>
        ) : (
          <h1>No goods selected</h1>
        )}
        <ul className="list">
          {goodsFromServer.map(good => (
            <li
              key={good}
              className={classNames({
                active: selectedGoods === good,
              })}
            >
              <span>{good}</span>
              {selectedGoods !== good && (
                <button
                  type="button"
                  className="button"
                  onClick={() => {
                    this.setState({
                      selectedGoods: good,
                    });
                  }}
                >
                  Select
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
