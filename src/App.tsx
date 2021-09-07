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
  selectedGood: string[],
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedGood: [],
  };

  resetGoods = () => {
    this.setState({ selectedGood: [] });
  };

  addGood = (newGood:string) => {
    this.setState((prevGoods) => ({
      selectedGood: [...prevGoods.selectedGood, newGood],
    }));
  };

  removeGood = (deleteGood:string) => {
    this.setState((newGoods) => ({
      selectedGood: newGoods.selectedGood.filter(good => good !== deleteGood),
    }));
  };

  createMessage = (selectedGood: string[]) => {
    let message = '';

    if (selectedGood.length === 0) {
      message = 'No goods selected';
    }

    if (selectedGood.length === 1) {
      message = `${selectedGood.join(', ')} is selected`;
    }

    if (selectedGood.length > 1) {
      const lastElem = selectedGood[selectedGood.length - 1];
      const firstPart = selectedGood.slice(0, -1).join(', ');

      message = `${firstPart} and ${lastElem} are selected`;
    }

    return message;
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          {this.createMessage(selectedGood)}
        </h1>
        <button
          type="button"
          className="button"
          onClick={this.resetGoods}
        >
          X
        </button>

        <section className="cards">
          {goodsFromServer.map(good => (
            <div className={selectedGood.includes(good) ? 'card__selected' : 'card'}>
              <h2>
                {good}
              </h2>

              <button
                type="button"
                className="button"
                onClick={() => {
                  this.addGood(good);
                }}
              >
                Add
              </button>
              <button
                type="button"
                className="button"
                onClick={() => {
                  this.removeGood(good);
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
