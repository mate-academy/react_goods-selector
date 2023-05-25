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
  name: string,
  clicked: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    name: goods[goods.indexOf('Jam')] || goods[0],
    clicked: false,
  };

  clear = () => {
    this.setState({
      name: '',
      clicked: false,
    });
  };

  save = (
    good: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (event.currentTarget.className === 'button') {
      this.setState({
        name: good,
        clicked: true,
      });
    } else {
      this.setState({
        name: '',
        clicked: false,
      });
    }
  };

  render() {
    const { name, clicked } = this.state;

    return (
      <main className="section container">
        <h1 className="title">
          {clicked === false ? 'No goods selected' : null}
        </h1>

        <h1 className="title is-flex is-align-items-center">

          {clicked === true ? `${name}
          is selected` : null}

          {clicked === true
            ? (
              <button
                aria-label="hide and clear"
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={this.clear}
              />
            ) : null}

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}

        </h1>

        <table className="table">
          <tbody>
            {goods.map((good: string) => (
              <tr
                data-cy="Good"
                key={good}
                className={good === name ? 'has-background-success-light ' : ''}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={good === name ? 'button is-info' : 'button'}
                    onClick={(event) => this.save(good, event)}
                  >
                    {good === name ? '-' : '+' }

                  </button>
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
