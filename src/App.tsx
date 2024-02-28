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

  mapGoods = (selected: string) => {
    const { selectedGood } = this.state;

    const addButton = (
      <button
        data-cy="AddButton"
        type="button"
        className="button"
        onClick={() => {
          this.addSelectedGood(selected);
        }}
      >
        +
      </button>
    );

    const removeButton = (
      <button
        data-cy="RemoveButton"
        type="button"
        className="button is-info"
        onClick={this.clearSelectedGood}
      >
        -
      </button>
    );

    return (
      <tr
        data-cy="Good"
        className={
          selectedGood === selected ? 'has-background-success-light' : ''
        }
        key={selected}
      >
        <td>{selectedGood !== selected ? addButton : removeButton}</td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {selected}
        </td>
      </tr>
    );
  };

  render() {
    const { selectedGood } = this.state;

    const titleNotSelectedGood = <h1 className="title">No goods selected</h1>;

    const titleSelectedGood = (
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
    );

    return (
      <main className="section container">
        {selectedGood === '' ? titleNotSelectedGood : titleSelectedGood}

        <table className="table">
          <tbody>
            {goods.map(selected => {
              return this.mapGoods(selected);
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
