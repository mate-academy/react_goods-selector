import { Component } from 'react';
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
  selectedGood: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    selectedGood: 'Jam',
  };

  pushButton = (itemName: string) => {
    this.setState({ selectedGood: itemName });
  };

  render() {
    const { selectedGood } = this.state;
    const headerMsg = selectedGood
      ? `${selectedGood} is selected`
      : 'No goods selected';

    return (
      <main className="section container">
        <h1 className={classNames(
          'title',
          { 'is-flex is-align-items-center': selectedGood },
        )}
        >
          {headerMsg}

          {selectedGood && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => this.pushButton('')}
            />
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(item => {
              const match = selectedGood === item;

              const buttonType = match
                ? 'RemoveButton'
                : 'AddButton';

              const newValue = buttonType === 'AddButton'
                ? item
                : '';

              const buttonSign = buttonType === 'AddButton'
                ? '+'
                : '-';

              return (
                <tr
                  data-cy="Good"
                  className={classNames(
                    { 'has-background-success-light': match },
                  )}
                >
                  <td>
                    <button
                      data-cy={buttonType}
                      type="button"
                      className={classNames(
                        'button',
                        { 'is-info': match },
                      )}
                      onClick={() => this.pushButton(newValue)}
                    >
                      {buttonSign}
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
