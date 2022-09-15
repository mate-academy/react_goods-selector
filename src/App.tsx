import React from 'react';
import classNames from 'classnames';
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
  selectedGood: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  changeElement = (element: string) => (
    element === this.state.selectedGood
      ? this.setState({ selectedGood: '' })
      : this.setState({ selectedGood: element })
  );

  removedElement = () => {
    this.setState({ selectedGood: '' });
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        { !selectedGood
          ? (
            <h1 className="title">
              No goods selected
            </h1>
          )

          : (
            <h1 className="title is-flex is-align-items-center">

              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                aria-label="ClearButton"
                className="delete ml-3"
                onClick={this.removedElement}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(element => (
              <tr
                key={element}
                data-cy="Good"
                className={classNames(
                  '',
                  { 'has-background-success-light': selectedGood === element },
                )}
              >
                <td>
                  <button
                    data-cy={selectedGood === element
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': selectedGood === element },
                    )}
                    onClick={() => (this.changeElement(element)
                    )}
                  >
                    {selectedGood === element
                      ? '-'
                      : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {element}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
