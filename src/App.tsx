import { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods: string[] = [
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

interface State {
  selectedGood : string;
}

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  selectGood = (word: string) => {
    this.setState({
      selectedGood: word,
    });
  };

  unselectGood = () => this.setState({ selectedGood: '' });

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.unselectGood}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}

        <h1
          className={classNames('title',
            { 'is-flex is-align-items-center': selectedGood })}
        >
          {selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={this.unselectGood}
                />
              </>
            )
            : 'No goods selected'}

        </h1>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isGoodSelected = selectedGood === good;

              const handleSelection = () => {
                return isGoodSelected
                  ? this.unselectGood()
                  : this.selectGood(good);
              };

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={classNames(
                    { 'has-background-success-light': isGoodSelected },
                  )}
                >
                  <td>
                    <button
                      data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                      type="button"
                      className={`button ${isGoodSelected && 'is-info'}`}
                      onClick={handleSelection}
                    >
                      {isGoodSelected
                        ? '-'
                        : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
