import React from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import goods from './api/goods';

type State = {
  status: string;
};

export class App extends React.Component<{}, State> {
  state = {
    status: 'Jam',
  };

  addGood = (good: string) => {
    this.setState({ status: good });
  };

  removeGood = () => {
    this.setState({ status: '' });
  };

  render() {
    const { status } = this.state;

    return (
      <main className="section container">
        {!status ? (<h1 className="title">No goods selected</h1>) : ''}

        {status ? (
          <h1 className="title is-flex is-align-items-center">
            {`${status} is selected`}

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => (
                this.setState({ status: '' })
              )}
            />
          </h1>
        )
          : ('')}

        <table className="table">
          <tbody>
            {goods.map((good) => (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': status === good,
                })}
              >
                <td>
                  {status === good ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => this.removeGood()}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => this.addGood(good)}
                    >
                      +
                    </button>
                  )}
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  {good}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
