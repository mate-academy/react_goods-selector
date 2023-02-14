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
  name: string;
  selectedItem: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    name: 'Jam',
    selectedItem: true,
  };

  controlEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
    const retouch = event.currentTarget.innerText === '+';

    this.clearAll();
    if (retouch) {
      const tdActive = event.currentTarget.parentElement;

      event.currentTarget.classList.add('is-info');
      event.currentTarget.setAttribute('data-cy', 'RemoveButton');
      tdActive?.parentElement?.classList.add('has-background-success-light');
      // eslint-disable-next-line no-param-reassign
      event.currentTarget.innerText = '-';
      this.setState({ name: tdActive?.nextSibling?.textContent || '' });
      this.setState({ selectedItem: true });
    }
  };

  clearAll = () => {
    const button = document.querySelectorAll('.button');
    const tr = document.querySelectorAll('tr');

    button.forEach((elem) => {
      elem.classList.remove('is-info');
      // eslint-disable-next-line no-param-reassign
      elem.textContent = '+';
      elem.setAttribute('data-cy', 'AddButton');
    });

    tr.forEach((elem) => elem.classList
      .remove('has-background-success-light'));
    this.setState({ selectedItem: false });
  };

  createMassiveElements = () => {
    return (
      goods.map((elem) => {
        return (
          <tr
            data-cy="Good"
            key={elem}
            className={
              classNames({ 'has-background-success-light': elem === 'Jam' })
            }
          >
            <td>
              <button
                data-cy={elem === 'Jam' ? 'RemoveButton' : 'AddButton'}
                type="button"
                className={classNames('button', { 'is-info': elem === 'Jam' })}
                onClick={this.controlEvent}
              >
                {elem === 'Jam' ? '-' : '+'}
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {elem}
            </td>
          </tr>
        );
      })
    );
  };

  render() {
    return (
      <main className="section container">
        {this.state.selectedItem
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${this.state.name} is selected`}

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedItem: false });
                  this.clearAll();
                }}
              />
            </h1>
          )
          : <h1 className="title">No goods selected</h1>}
        <table className="table">
          <tbody>
            {this.createMassiveElements()}
          </tbody>
        </table>
      </main>
    );
  }
}
