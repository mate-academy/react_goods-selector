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
  item: string;
  selectedGood: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    item: 'Jam',
    selectedGood: 'No goods selected',
  };

  componentDidMount() {
    const { item } = this.state;

    this.setState({ selectedGood: `${item} is selected` });
  }

  render() {
    const { item, selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {selectedGood}
        </h1>
        <button
          type="submit"
          className="button button__clear"
          hidden={!item}
          onClick={() => {
            this.setState({
              item: '',
              selectedGood: 'No goods selected',
            });
          }}
        >
          Clear
        </button>
        <ul className="goods">
          {goodsFromServer.map(good => (
            <>
              <li
                key={good}
                className={good === item ? 'good good__selected' : 'good'}
              >
                {good}
                <button
                  type="submit"
                  className="button"
                  onClick={() => {
                    if (item === good) {
                      this.setState({
                        item: '',
                        selectedGood: 'No goods selected',
                      });
                    } else {
                      this.setState({
                        item: good,
                        selectedGood: `${good} is selected`,
                      });
                    }
                  }}
                >
                  {good === item ? 'Remove' : 'Select'}
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
