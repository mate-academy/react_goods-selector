/* eslint-disable prettier/prettier */
import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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
    selectedGood: 'Jam',
  };

  clearSelectedGood = () => {
    this.setState({
      selectedGood: '',
    });
  };

  addSelectedGood = (newSelectedGood: string) => {
    this.setState({
      selectedGood: newSelectedGood,
    });
  };

  renderGoods = (product: string) => {
    const { selectedGood } = this.state;

    const button = (
      <button
        data-cy={selectedGood === product ? 'RemoveButton' : 'AddButton'}
        type="button"
        className={`button ${selectedGood === product ? 'is-info' : ''}`}
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          selectedGood === product
            ? this.clearSelectedGood()
            : this.addSelectedGood(product);
        }
        }
      >
        {selectedGood === product ? '-' : '+'}
      </button>
    );

    return (
      <tr
        data-cy="Good"
        className={
          selectedGood === product ? 'has-background-success-light' : ''
        }
        key={product}
      >
        <td>{button}</td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {product}
        </td>
      </tr>
    );
  };

  renderTitle = () => {
    const { selectedGood } = this.state;

    return (selectedGood === ''
      ? <h1 className="title">No goods selected</h1> : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={this.clearSelectedGood}
          />
        </h1>
      ));
  }

  render() {
    return (
      <main className="section container">
        {this.renderTitle()}

        <table className="table">
          <tbody>
            {goods.map(product => {
              return this.renderGoods(product);
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
