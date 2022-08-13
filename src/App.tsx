import { Component } from 'react';
import './App.scss';
import classNames from 'classnames';
import goodsFromServer from './goods';

type State = {
  selectedGoods: string[];
};

export class App extends Component<{}, State> {
  state = {
    selectedGoods: ['Jam'],
  };

  isSelected(good: string): boolean {
    return !!this.state.selectedGoods.find(g => g === good);
  }

  addProp(good: string) {
    // this.setState({ selectedGoods: [...state.selectedGoods, good] });
    this.setState({ selectedGoods: [good] });
  }

  removeProp(good: string, state: State) {
    this.setState({
      selectedGoods: state.selectedGoods.filter(el => el !== good),
    });
  }

  render() {
    const { selectedGoods } = this.state;

    return (
      <main className="App">
        <header className="App__header">
          <h1 className="App__title">
            {!selectedGoods.length && 'No goods selected' }
            {!!selectedGoods.length && `${selectedGoods.join(', ')} is selected` }
          </h1>

          {!!selectedGoods.length && (
            <button
              type="button"
              className="App__clear"
              onClick={() => {
                this.setState({ selectedGoods: [] });
              }}
            >
              Clear
            </button>
          )}
        </header>

        <ul className="List">
          {goodsFromServer.map((good) => (
            <>
              <li
                key={good}
                className={classNames('Good',
                  { 'Good--active': this.isSelected(good) })}
              >
                {good}

                { !this.isSelected(good) && (
                  <button
                    key={`button${good}`}
                    type="button"
                    className="Good__select"
                    onClick={() => this.addProp(good)}
                  >
                    Select
                  </button>
                ) }

                { this.isSelected(good) && (
                  <button
                    key={`button${good}`}
                    type="button"
                    className="Good__remove"
                    onClick={() => this.removeProp(good, this.state)}
                  >
                    Remove
                  </button>
                ) }
              </li>
            </>
          ))}
        </ul>
      </main>
    );
  }
}
