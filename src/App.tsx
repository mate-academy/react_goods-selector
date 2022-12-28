import { Component } from 'react';
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

export class App extends Component<{}, State> {
  state = {
    selectedGood: 'Jam',
  };

  buttonAddOrRemove = (
    text: string,
    classes: string,
    good: string,
    dataText: string,
  ) => {
    return (
      <button
        data-cy={dataText}
        type="button"
        className={classes}
        onClick={() => {
          this.setState({ selectedGood: good });
        }}
      >
        {text}
      </button>
    );
  };

  render() {
    const { selectedGood } = this.state;

    return (
      <main className="section container">

        {!selectedGood
          ? <h1 className="title">No goods selected</h1>
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  this.setState({ selectedGood: '' });
                }}
              />
            </h1>
          )}
        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  data-cy="Good"
                  className={classNames({
                    'has-background-success-light': (selectedGood === good),
                  })}
                >
                  <td>
                    {good === selectedGood
                      ? this.buttonAddOrRemove(
                        '-', 'button is-info', '', 'AddButton',
                      )
                      : this.buttonAddOrRemove(
                        '+', 'button', good, 'RemoveButton',
                      )}
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
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
