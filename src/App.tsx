import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Good } from './component/Good';

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
  selectedGood: string
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  handler = (name = '') => {
    this.setState({ selectedGood: name });
  };

  render() {
    return (
      <main className="section container">
        {(this.state.selectedGood.length === 0)
          ? (
            <h1 className="title">No goods selected</h1>
          )
          : (
            <>
              <h1 className="title is-flex is-align-items-center">
                {this.state.selectedGood}
                {' is selected'}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  id="button"
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => this.handler()}
                />
              </h1>
            </>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <Good
                good={good}
                onClick={(name: string) => this.handler(name)}
                className={(good === this.state.selectedGood)
                  ? 'has-background-success-light'
                  : ''}
              />
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
