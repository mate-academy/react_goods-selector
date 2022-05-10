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
  selectedGood: string[];
};

class App extends React.Component<{}, State> {
  state = {
    selectedGood: ['Jam'],
  };

  buttonClick = (item: string) => {
    const { selectedGood } = this.state;

    if (selectedGood.includes(item)) {
      this.setState({ selectedGood: selectedGood.filter(e => e !== item) });
    } else {
      this.setState({ selectedGood: [...selectedGood, item] });
    }
  };

  clearGoods = () => {
    this.setState({
      selectedGood: [],
    });
  };

  render() {
    const { selectedGood } = this.state;
    let title = '';

    switch (selectedGood.length) {
      case 0:
        title = 'No goods selected';
        break;
      case 1:
        title = `${selectedGood} is selected`;
        break;

      case 2:
        title = `${selectedGood[0]} and ${selectedGood[1]} are selected`;
        break;
      default:
        title = `${selectedGood.slice(0, selectedGood.length - 1).join(',')} and ${selectedGood[selectedGood.length - 1]} are selected`;
    }

    return (
      <div className="App">
        <h1>{title}</h1>
        <div className="clear-button-wrapper">
          {selectedGood.length > 0
            ? (
              <button
                className="clear-button"
                type="button"
                onClick={this.clearGoods}
              >
                Clear
              </button>
            )
            : ''}
        </div>
        <ul>
          {goodsFromServer.map((item) => (
            <div
              className={selectedGood.includes(item)
                ? 'item selected'
                : 'item'}
              key={item}
            >
              <li>
                {item}
              </li>
              <button
                type="button"
                onClick={() => this.buttonClick(item)}
                className={selectedGood.includes(item)
                  ? 'item__button-selected'
                  : 'item__button'}
              >
                {selectedGood.includes(item) ? 'Remove' : 'Select'}
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
