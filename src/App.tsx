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

type Props = {};

type State = {
  selectedGood: string[],
};

class App extends React.Component<Props, State> {
  state = {
    selectedGood: ['Jam'],
  };

  messageSelectGood = () => {
    const { selectedGood } = this.state;

    if (this.state.selectedGood.length === 1) {
      return `${selectedGood} is selected`;
    }

    if (this.state.selectedGood.length > 1) {
      const firstWorlds = selectedGood.slice(0, selectedGood.length - 1);
      const lastWorld = selectedGood[selectedGood.length - 1];

      return `${firstWorlds.join(', ')} and ${lastWorld} are selected`;
    }

    return 'No goods selected';
  };

  addGood = (item: string) => {
    this.setState((state) => {
      return {
        selectedGood: [
          ...state.selectedGood,
          item,
        ],
      };
    });
  };

  removeGood = (item: string) => {
    this.setState((state) => {
      return {
        selectedGood: state.selectedGood.filter(el => item !== el),
      };
    });
  };

  resetGood = () => {
    this.setState({ selectedGood: [] });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected good: -
          {' '}
          {this.messageSelectGood()}
        </h1>
        <div className="block-button">
          {(this.state.selectedGood.length < 1) || (
            <button
              type="button"
              className="button reset-button"
              onClick={this.resetGood}
            >
              Reset
            </button>
          )}
        </div>
        <ul className="list">
          {goodsFromServer.map((item) => (
            <li
              key={item}
              className={this.state.selectedGood.includes(item)
                ? 'active-item'
                : 'list-item'}
            >
              {item}
              {!this.state.selectedGood.includes(item)
                ? (
                  <button
                    type="button"
                    className="button list-item-button"
                    onClick={() => (
                      this.addGood(item))}
                  >
                    Add
                  </button>
                )

                : (
                  <button
                    type="button"
                    className="button list-item-button"
                    onClick={() => (
                      this.removeGood(item))}
                  >
                    Remove
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
