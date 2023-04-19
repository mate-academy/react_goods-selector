import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  selected: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selected: 'Jam',
  };

  hendlerIsPressed = (good: string) => {
    if (this.state.selected === good) {
      this.setState({ selected: 'No goods selected' });
    } else {
      this.setState({ selected: good });
    }
  };

  render() {
    const { selected } = this.state;

    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {goods.includes(selected) ? (
            <>
              {`${selected} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selected: 'No goods selected' });
                }}
              />
            </>
          ) : ('No goods selected')}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={`${(selected === good) && 'has-background-success-light'}`}
              >
                <td>
                  <button
                    data-cy={selected === good
                      ? ('RemoveButton')
                      : ('AddButton')}
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': selected === good },
                    )}
                    onClick={() => this.hendlerIsPressed(good)}
                  >
                    {selected === good ? ('-') : ('+')}
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
