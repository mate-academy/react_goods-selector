import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodsList } from './components/GoodsList';

export const goods = [
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
  selectedGood: string;
};
export class App extends React.Component<{}, State> {
  state = {
    selectedGood: '',
  };

  addItem = (item: string) => {
    this.setState({ selectedGood: item });
  };

  removeItem = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {!selectedGood
          ? (
            <h1 className="title">No goods selected</h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                aria-label="clear btn"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              />
            </h1>
          )}

        <table className="table">
          <GoodsList
            goods={goods}
            addGood={this.addItem}
            removeItem={this.removeItem}
            selectedGood={this.state.selectedGood}
          />
        </table>
      </main>
    );
  }
}
