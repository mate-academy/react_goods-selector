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

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">
        {selectedGood === ''
          ? (
            <h1 className="title">
              No goods selected
            </h1>
          )
          : null}

        {selectedGood && (
          <h1 className="title is-flex is-align-items-center">
            {selectedGood && `${selectedGood} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => (this.setState({ selectedGood: '' }))}
            />
          </h1>
        )}

        <table className="table">
          <tbody>
            {goods.map(item => {
              return (
                <tr
                  data-cy="Good"
                  className={selectedGood === item
                    ? 'has-background-success-light'
                    : ''}
                >
                  <td>
                    <button
                      data-cy={selectedGood === item
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={selectedGood === item
                        ? 'button is-info'
                        : 'button'}
                      onClick={() => {
                        if (selectedGood === item) {
                          this.setState({ selectedGood: '' });
                        } else {
                          this.setState({ selectedGood: item });
                        }
                      }}
                    >
                      {selectedGood === item
                        ? '-'
                        : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
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
