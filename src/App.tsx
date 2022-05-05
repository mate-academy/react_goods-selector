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

  changeGoods = (good: string) => {
    this.setState(({ selectedGood }) => ({
      selectedGood: [...selectedGood, good],
    }));
  };

  removeGoods = (good: string) => {
    this.setState(({ selectedGood }) => {
      const index = selectedGood.indexOf(good);

      selectedGood.splice(index, 1);

      return { selectedGood };
    });
  };

  clearGoods = () => {
    this.setState({ selectedGood: [] });
  };

  getText = (str: string[]) => {
    switch (str.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${str[0]} is selected`;

      default:
        return `${str.slice(0, -1).join(', ')} and ${str[str.length - 1]} are selected`;
    }
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="App__head">{this.getText(selectedGood)}</h1>
        <ul className="list">
          {
            goodsFromServer.map(good => {
              const isSelected = selectedGood.includes(good);

              return (
                <li className="list__item" key={good}>
                  {good}
                  <button
                    type="button"
                    className="button__item"
                    onClick={
                      isSelected
                        ? () => this.removeGoods(good)
                        : () => this.changeGoods(good)
                    }
                  >
                    {isSelected ? 'Remove' : 'Select'}
                  </button>
                </li>
              )
            })
          }
        </ul>
        <button
          className={`button
          ${selectedGood.length === 0 && 'button--hide'}`}
          type="button"
          onClick={this.clearGoods}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default App;
