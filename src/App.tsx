import React from 'react';
import './App.scss';
import classNames from 'classnames';

const goodsFromServer: Good[] = [
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

type Good = 'Dumplings' | 'Carrot' | 'Eggs' | 'Ice cream' | 'Apple' | 'Bread' | 'Fish' | 'Honey' | 'Jam' | 'Garlic';

interface State{
  selectedGoods: Good []
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: ['Jam'],
  };

  get selected() {
    const { selectedGoods } = this.state;

    switch (selectedGoods.length) {
      case 0:
        return 'No goods selected';

      case 1:
        return `${selectedGoods[0]} is selected`;

      default:
        return `${selectedGoods.slice(0, selectedGoods.length - 1).join(', ')} and ${selectedGoods[selectedGoods.length - 1]} are selected`;
    }
  }

  addGood = (good: Good) => {
    const { selectedGoods } = this.state;

    selectedGoods.push(good);
    this.setState({ selectedGoods });
  };

  removeGood = (good: Good) => {
    const { selectedGoods } = this.state;

    this.setState({ selectedGoods: selectedGoods.filter(item => item !== good) });
  };

  removeAll = () => {
    this.setState({ selectedGoods: [] });
  };

  render() {
    const { selectedGoods } = this.state;

    return (
      <div className="App">
        <h1 className="App-Title">
          {`Selected good: ${this.selected}`}
        </h1>
        <div className="App-Remove-All">
          {this.state.selectedGoods.length !== 0 && (
            <button
              type="button"
              className="App-Remove-All-Button"
              onClick={this.removeAll}
            >
              Remove all goods
            </button>
          )}
        </div>
        <ul className="App-List">
          {goodsFromServer.map(good => (
            <li key={good} className={classNames('App-Item', { 'App-Item_Selected': selectedGoods.includes(good) })}>
              <div className="App-Good">{good}</div>
              <button
                type="button"
                className="App-Button"
                onClick={
                  selectedGoods.includes(good)
                    ? () => this.removeGood(good)
                    : () => this.addGood(good)
                }
              >
                {selectedGoods.includes(good) ? 'Remove' : 'Add'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
