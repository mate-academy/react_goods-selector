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

export class App extends React.Component {
  state = {
    selected: 'Jam',
  };

  handleGoodClick = (good: string) => {
    const { selected } = this.state;

    if (selected === good) {
      this.setState({ selected: '' });
    } else {
      this.setState({ selected: good });
    }
  }

  render() {
    const { selected } = this.state;

    return (
      <main className="section container">
        {selected === '' ? (
          <h1 className="title">No goods selected</h1>
        )
          : (
            <h1 className="title is-flex is-align-items-center">

              { selected }
              {' '}
              is selected
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                onClick={() => (this.setState({ selected: '' }))}
                type="button"
                className="delete ml-3"
              />
            </h1>
          )}

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                className={selected === good
                  ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={selected === good
                      ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={selected === good
                      ? 'button is-info' : 'button'}
                    onClick={() => this.handleGoodClick(good)}
                  >
                    {selected === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  { good }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
