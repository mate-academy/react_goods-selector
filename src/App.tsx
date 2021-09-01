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
    const arrayOfGoods = this.state.selectedGood;

    if (arrayOfGoods.includes(deleteGood)) {
      arrayOfGoods.splice(arrayOfGoods.lastIndexOf(deleteGood), 1);
    }

    this.setState((newGoods) => ({
      selectedGood: [...newGoods.selectedGood],
    }));
  };

  render() {
    let message = '';

    if (this.state.selectedGood.length === 0) {
      message = 'No goods selected';
    }

    if (this.state.selectedGood.length === 1) {
      message = `${this.state.selectedGood.join(', ')} is selected`;
    }

    if (this.state.selectedGood.length > 1) {
      const lastElem = this.state.selectedGood[this.state.selectedGood.length - 1];
      const firstPart = this.state.selectedGood.slice(0, -1).join(', ');

      message = `${firstPart} and ${lastElem} are selected`;
    }

    return (
      <div className="App">
        <h1 className="title">
          {message}
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
            <div className={this.state.selectedGood.includes(good) ? 'card__active' : 'card'}>
              <h2 className="card__title">
                {good}
              </h2>

              <button
                type="button"
                className="button button__add"
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
