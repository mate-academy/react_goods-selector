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

  selectedElement = (element: string) => {
    this.setState({ selectedGood: element });
  };

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
                onClick={() => this.setState(
                  this.removedElement,
                )}
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(element => (
              <tr
                data-cy="Good"
                className={selectedGood === element
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={selectedGood === element
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={
                      classNames('button',
                        { 'is-info': selectedGood === element })
                    }
                    onClick={() => (
                      selectedGood === element
                        ? this.removedElement()
                        : this.selectedElement(element)
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
