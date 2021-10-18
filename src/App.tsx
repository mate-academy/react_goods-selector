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
  selectedGoods: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: 'Jam',
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <>
        <div className="App">
          <h1>
            {selectedGoods
              ? `${selectedGoods} is selected`
              : 'No goods selected'}
            <button
              className={selectedGoods ? 'enable' : 'disable'}
              type="button"
              onClick={() => {
                this.setState({
                  selectedGoods: '',
                });
              }}
            >
              X
            </button>
          </h1>
        </div>
        <ul>
          {goodsFromServer.map(good => (
            <li key={good} className={selectedGoods === good ? 'selected' : 'notSelected'}>
              {good}
              <button
                type="button"
                onClick={() => {
                  this.setState({
                    selectedGoods: good,
                  });
                }}
              >
                Select
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
