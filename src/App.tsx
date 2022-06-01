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
    selectedGoods: goodsFromServer[8],
  };

  getSelectedRemove(good: string) {
    if (this.state.selectedGoods !== good) {
      this.setState({ selectedGoods: good });
    } else {
      this.setState({ selectedGoods: '' });
    }
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App m-4">
        <h1 className="title is-3">
          {selectedGoods
            ? `${selectedGoods} is selected`
            : 'No goods selected'}
        </h1>
        <button
          type="button"
          className="button is-black is-outlined"
          onClick={() => this.setState({ selectedGoods: '' })}
          disabled={!selectedGoods}
        >
          Clear
        </button>
        <ul>
          {goodsFromServer.map(good => (
            <>
              <li
                className={selectedGoods === good
                  ? 'has-background-warning-light'
                  : ''}
              >
                {good}
              </li>
              <button
                type="button"
                onClick={() => this.getSelectedRemove(good)}
                className="button is-warning is-rounded is-small"
              >
                {selectedGoods === good
                  ? 'Remove'
                  : 'Selected'}
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
