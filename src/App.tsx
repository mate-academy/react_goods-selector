import { Component } from 'react';
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

export class App extends Component<{}, {}> {
  state = {
    SelectedGood: 'Jam',
  };

  render() {
    const { SelectedGood } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {SelectedGood
            ? (
              <>
                {`${SelectedGood} is selected`}

                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={() => {
                    this.setState({ SelectedGood: '' });
                  }}
                />
              </>
            )
            : 'No goods selected'}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                SelectedGood === good
                  ? (
                    <tr
                      data-cy="Good"
                      data-good={good}
                      key={good}
                      className="has-background-success-light"
                    >
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => {
                            this.setState({ SelectedGood: '' });
                          }}
                        >
                          -
                        </button>
                      </td>

                      <td data-cy="GoodTitle" className="is-vcentered">
                        {good}
                      </td>
                    </tr>
                  )
                  : (
                    <tr
                      data-cy="Good"
                      data-good={good}
                      key={good}
                    >
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => {
                            this.setState({ SelectedGood: good });
                          }}
                        >
                          +
                        </button>
                      </td>

                      <td data-cy="GoodTitle" className="is-vcentered">
                        {good}
                      </td>
                    </tr>
                  )
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
