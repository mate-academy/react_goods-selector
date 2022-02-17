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
  selected: string
};

class App extends React.Component<{}, State> {
  state: State = {
    selected: 'Jam',
  };

  remove = () => {
    this.setState({ selected: '' });
  };

  render(): React.ReactNode {
    const { selected } = this.state;

    return (
      <div className="App">
        <h1 className="App__head">{selected ? `${selected} is selected` : 'No goods selected'}</h1>
        <button
          className="App__cancel"
          type="button"
          onClick={this.remove}
        >
          X
        </button>
        <ul className="App__list list">
          {goodsFromServer.map((good) => (
            <div className="list__goods">
              <li key={good} className="list__goods-item">
                {good}
              </li>
              <button
                type="button"
                className="list__button"
                onClick={() => (
                  selected === good
                    ? this.remove()
                    : this.setState({ selected: good })
                )}
              >
                {selected === good ? 'Cancel' : 'Select'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
