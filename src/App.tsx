import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
/* eslint-disable max-len */

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

export class App extends React.Component {
  state = {
    select: '',
  };

  render() {
    const { select } = this.state;

    return (
      <main className="section container">
        {select === '' ? (
          <h1 className="title">No goods selected</h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {select}
            {' '}
            is selected

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.setState({ select: '' })}
              aria-label="remove button"
            />
          </h1>
        ) }

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={classNames({ 'has-background-success-light': select === good })}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    onClick={() => {
                      this.setState({ select: good });
                    }}
                    className={classNames('button', { 'is-info': select === good })}
                  >
                    {this.state.select === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
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
