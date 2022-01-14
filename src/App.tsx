import React from 'react';
import './App.scss';

const goodsFromServer: string[] = [
  ' Dumplings',
  ' Carrot',
  ' Eggs',
  ' Ice cream',
  ' Apple',
  ' Bread',
  ' Fish',
  ' Honey',
  ' Jam',
  ' Garlic',
];

interface State {
  selectedGoods: string[];
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedGoods: [],
  };

  getMessage = () => {
    let message = '';

    switch (this.state.selectedGoods.length) {
      case 0:
        message = 'No goods selected';
        break;

      case 1:
        message = `${this.state.selectedGoods[0]} is selected`;
        break;

      case 2:
        message = `${this.state.selectedGoods[0]} and ${this.state.selectedGoods[1]} are selected`;
        break;

      default:
        message = `${this.state.selectedGoods.slice(0, this.state.selectedGoods.length - 1)} and ${this.state.selectedGoods[this.state.selectedGoods.length - 1]} are selected`;
        break;
    }

    return message;
  };

  getButton = (good: string) => {
    return (
      <button
        type="button"
        onClick={() => {
          this.selector(good);
        }}
      >
        {this.state.selectedGoods.includes(good) ? 'Remove' : 'Add'}
      </button>
    );
  };

  selector = (good: string) => {
    const { selectedGoods } = this.state;

    if (selectedGoods.includes(good)) {
      selectedGoods.splice(selectedGoods.indexOf(good), 1);
    } else {
      selectedGoods.push(good);
    }

    this.setState(prevState => ({ selectedGoods: prevState.selectedGoods }));
  };

  render() {
    return (
      <div>
        <h1>
          {this.getMessage()}
        </h1>
        <ul>
          {goodsFromServer.map((good) => {
            return (
              <li key={good} className={this.state.selectedGoods.includes(good) ? 'added' : ''}>
                {good}
                {this.getButton(good)}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
