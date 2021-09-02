import React from 'react';
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
  selectedGoods: string[];
};

enum Operation {
  Add,
  Remove,
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  goodsOperationsHandler = (operation: Operation, good: string) => {
    switch (operation) {
      case Operation.Add:
        this.setState((state) => ({ selectedGoods: [...state.selectedGoods, good] }));

        break;
      case Operation.Remove:
        this.setState((state) => (
          { selectedGoods: state.selectedGoods.filter(goodItem => goodItem !== good) }
        ));

        break;
      default:
    }
  };

  render() {
    const { selectedGoods } = this.state;
    const goodsLengthCheck = selectedGoods.length > 1
      ? `${selectedGoods.slice(0, -1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`
      : `${selectedGoods[0]} is selected`;

    return (
      <div className="App">
        <div className="App__top">
          <h1>
            {selectedGoods.length ? goodsLengthCheck : 'No goods selected'}
          </h1>
          {!!selectedGoods.length && (
            <button
              type="button"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
              onKeyDown={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              X
            </button>
          )}
        </div>
        <ul>
          {goodsFromServer.map((good) => (
            <li key={good}>
              <div className="App__good">
                <p className={classNames('App__good-text', { 'App__good-text-selected': selectedGoods.includes(good) })}>
                  {good}
                </p>
                {selectedGoods.includes(good)
                  ? (
                    <button
                      type="button"
                      onClick={() => {
                        this.goodsOperationsHandler(Operation.Remove, good);
                      }}
                      onKeyDown={() => {
                        this.goodsOperationsHandler(Operation.Remove, good);
                      }}
                    >
                      Remove
                    </button>
                  )
                  : (
                    <button
                      type="button"
                      onClick={() => {
                        this.goodsOperationsHandler(Operation.Add, good);
                      }}
                      onKeyDown={() => {
                        this.goodsOperationsHandler(Operation.Add, good);
                      }}
                    >
                      Add
                    </button>
                  )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
